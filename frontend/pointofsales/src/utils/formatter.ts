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

export const dateFormatter = (strDate: string) => {
  const date = new Date(strDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formattedDate;
};

export const timeFormatter = (strDate: string) => {
  const date = new Date(strDate);
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return formattedTime;
};
