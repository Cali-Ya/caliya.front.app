export const preprocessCartItems = (items) => {
  return items.map((item) => {
    const additionalsTotal = Array.isArray(item.additionals)
      ? item.additionals.reduce((sum, a) => sum + (a.price || 0), 0)
      : 0;
    return {
      ...item,
      subtotal: ((item.price || 0) + additionalsTotal) * (item.quantity || 1),
    };
  });
};
