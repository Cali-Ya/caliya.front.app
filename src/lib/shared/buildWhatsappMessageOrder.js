export function buildWhatsAppMessage(
  items,
  shopName,
  purchaseData,
  formatNumber
) {
  items = Array.isArray(items) ? items : [];

  let total = 0;
  let message = '¡Hola! Quiero hacer el siguiente pedido:\n\n';
  if (shopName) message += `Tienda: ${shopName}\n\n`;

  items.forEach((item, idx) => {
    const additionals = Array.isArray(item.additionals) ? item.additionals : [];
    const additionalsTotal = additionals.reduce(
      (sum, a) => sum + (a.price || 0),
      0
    );
    const unitPrice = item.price || 0;
    const quantity = item.quantity || 1;
    const totalUnitPrice = unitPrice * quantity;
    const totalAdditionals = additionalsTotal * quantity;
    const subtotal = totalUnitPrice + totalAdditionals;
    total += subtotal;

    // Producto y detalles
    message += `Producto: ${item.name}\n`;
    message += `* Cantidad: ${quantity}\n`;
    message += `* Precio unitario: $${formatNumber(unitPrice, 'es-CO')}\n`;
    message += `* Precio total: $${formatNumber(totalUnitPrice, 'es-CO')}\n\n`;

    // Observaciones (si existen)
    if (item.observation && item.observation.trim() !== '') {
      message += `Observaciones: ${item.observation}\n\n`;
    }

    // Adicionales (si existen)
    if (additionals.length > 0) {
      message += `Adicionales:\n`;
      additionals.forEach((a) => {
        message += `- ${a.name}: $${formatNumber(a.price, 'es-CO')}\n`;
      });
      message += `* Precio total: $${formatNumber(totalAdditionals, 'es-CO')}\n\n`;
    }

    message += `Subtotal:  $${formatNumber(subtotal, 'es-CO')}\n`;

    // Separador visual entre productos
    if (items.length > 1 && idx < items.length - 1) {
      message += '-------------------------\n\n';
    } else {
      message += '\n';
    }
  });

  message += `---------------------------------------\n\n`;
  message += `Total a pagar: $${formatNumber(total, 'es-CO')}\n\n`;
  message += `Datos del comprador:\n`;
  if (purchaseData.full_name) message += `Nombre: ${purchaseData.full_name}\n`;
  if (purchaseData.direction)
    message += `Dirección: ${purchaseData.direction}\n`;
  if (purchaseData.neighborhood)
    message += `Barrio: ${purchaseData.neighborhood}\n`;
  if (purchaseData.whatsapp) message += `Whatsapp: ${purchaseData.whatsapp}\n`;
  if (purchaseData.payment_amount) {
    message += `Pago con: $${formatNumber(
      purchaseData.payment_amount,
      'es-CO'
    )}\n`;
  }

  // Codifica todo el mensaje para WhatsApp
  return encodeURIComponent(message);
}
