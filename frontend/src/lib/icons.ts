export const icons = {
  // General
  arrow: "/images/icons/arrow.svg",

  // Customers
  "customers/airbnb": "/images/icons/customers/airbnb.svg",
  "customers/airwallex": "/images/icons/customers/airwallex.svg",
  "customers/amplitude": "/images/icons/customers/amplitude.svg",
  "customers/atlassian": "/images/icons/customers/atlassian.svg",
} as const;

export type IconName = keyof typeof icons;
