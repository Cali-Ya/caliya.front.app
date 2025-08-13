function extractGoogleComponents(components) {
  const result = {};
  components.forEach((component) => {
    if (component.types.includes('street_number')) {
      result.street_number = component.long_name;
    }
    if (component.types.includes('route')) {
      result.route = component.long_name;
    }
    if (component.types.includes('locality')) {
      result.city = component.long_name;
    }
    if (component.types.includes('administrative_area_level_1')) {
      result.state = component.long_name;
    }
    if (component.types.includes('country')) {
      result.country = component.long_name;
    }
    if (component.types.includes('postal_code')) {
      result.postal_code = component.long_name;
    }
  });
  return result;
}

export const GoogleMapsGeocoding = async (lat, lon, apiKey) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}&language=es&region=co`;

    const response = await fetch(url);
    const data = await response.json();

    console.log('🔍 Google Maps Result:');
    console.log('Status:', data.status);

    if (data.results && data.results[0]) {
      const result = data.results[0];
      console.log('Formatted Address:', result.formatted_address);
      console.log('Address Components:', result.address_components);

      // Extraer componentes específicos
      const components = extractGoogleComponents(result.address_components);
      console.log('Parsed Components:', components);

      return {
        api: 'Google Maps',
        formatted_address: result.formatted_address,
        components: components,
        precision: result.geometry.location_type,
      };
    }
  } catch (error) {
    console.error('❌ Google Maps Error:', error);
    return { error: error.message };
  }
};
