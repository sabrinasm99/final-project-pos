export const currencyFormatter = (price: number) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const enNumberFormatter = (num: number) => {
  return num.toLocaleString();
};

export const idNumberFormatter = (num: number) => {
  return num.toLocaleString("id-ID");
};
