export function buildWhatsAppMessage(
  items,
  shopName,
  purchaseData,
  formatNumber
) {
  items = Array.isArray(items) ? items : [];

  let total = 0;
  let message = '¡Hola! Quiero hacer el siguiente pedido:%0A%0A';
  if (shopName) message += `Tienda: ${shopName}%0A%0A`;

  items.forEach((item, idx) => {
    const additionals = Array.isArray(item.additionals) ? item.additionals : [];
    const additionalsTotal = additionals.reduce(
      (sum, a) => sum + (a.price || 0),
      0
    );
    const unitPrice = item.price || 0;
    const subtotal = (unitPrice + additionalsTotal) * (item.quantity || 1);
    total += subtotal;

    // Línea principal del producto: SOLO el precio base unitario
    message += `• ${item.name} x${item.quantity} - $${formatNumber(
      unitPrice,
      'es-CO'
    )}%0A`;

    // Observaciones (si existen)
    if (item.observation && item.observation.trim() !== '') {
      message += `Observaciones: ${item.observation}%0A`;
    }

    // Adicionales (si existen)
    if (additionals.length > 0) {
      message += `%0AAdicionales:%20%0A`;
      additionals.forEach((a) => {
        message += `${a.name} - $${formatNumber(a.price, 'es-CO')}%0A`;
      });
    }

    // Subtotal (producto + adicionales)
    message += `%0ASubtotal: $${formatNumber(subtotal, 'es-CO')}%0A`;

    // Separador visual entre productos (solo si hay más de uno)
    if (items.length > 1 && idx < items.length - 1) {
      message += '------------------------%0A%0A';
    } else {
      message += '%0A';
    }
  });

  message += `------------------------%0A%0A`;
  message += `Total A Pagar: $${formatNumber(total, 'es-CO')}%0A%0A`;
  message += `Datos del comprador:%0A%0A`;

  // Pago con (si existe)
  if (purchaseData.payment_amount) {
    message += `Pago con: $${formatNumber(
      purchaseData.payment_amount,
      'es-CO'
    )}%0A`;
  }
  if (purchaseData.full_name) message += `Nombre: ${purchaseData.full_name}%0A`;
  if (purchaseData.direction)
    message += `Dirección: ${purchaseData.direction}%0A`;
  if (purchaseData.neighborhood)
    message += `Barrio: ${purchaseData.neighborhood}%0A`;
  if (purchaseData.whatsapp) message += `Whatsapp: ${purchaseData.whatsapp}%0A`;

  return message;
}
