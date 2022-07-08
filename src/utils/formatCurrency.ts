export const formatCurrency = (amount?: string) => {
    if (amount) {
      const amountString = amount
        .toString()
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
      return amountString;
    }
    return '';
};