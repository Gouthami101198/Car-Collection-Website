// Indian & Global Currency Formatters with Indian Lakh & Crore Notation

export const CURRENCIES = {
  INR: { symbol: '₹', rate: 1.0, code: 'INR', name: 'Indian Rupee (₹)' },
  USD: { symbol: '$', rate: 0.012, code: 'USD', name: 'US Dollar ($)' },
  AED: { symbol: 'AED ', rate: 0.044, code: 'AED', name: 'UAE Dirham (AED)' },
  EUR: { symbol: '€', rate: 0.011, code: 'EUR', name: 'Euro (€)' },
};

/**
 * Formats a value in Indian Rupees (INR) using Lakhs and Crores
 * e.g. 24,50,000 -> ₹24.50 Lakh
 * e.g. 3,80,00,000 -> ₹3.80 Crore
 * e.g. 8,50,000 -> ₹8.50 Lakh
 */
export function formatPrice(inrAmount, currencyCode = 'INR') {
  if (currencyCode === 'INR') {
    if (inrAmount >= 10000000) {
      // 1 Crore = 10,000,000
      const cr = (inrAmount / 10000000).toFixed(2);
      return `₹${parseFloat(cr)} Crore`;
    } else if (inrAmount >= 100000) {
      // 1 Lakh = 100,000
      const lakh = (inrAmount / 100000).toFixed(2);
      return `₹${parseFloat(lakh)} Lakh`;
    } else {
      return `₹${inrAmount.toLocaleString('en-IN')}`;
    }
  }

  // Other currencies conversion
  const curr = CURRENCIES[currencyCode] || CURRENCIES.INR;
  const converted = Math.round(inrAmount * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

/**
 * Returns exact Indian formatted number: e.g. 24,50,000
 */
export function formatIndianNumber(num) {
  return num.toLocaleString('en-IN');
}
