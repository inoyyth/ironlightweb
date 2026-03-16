export type WorkItem = {
  tags: string[];
  title: string;
  subtitle: string;
  description: string;
  whatWeDid: string[];
  result: string;
  stack: string[];
};

export const CONVERSATION = {
  heading: "Working on something similar?",
  subheading: "No forms. No sales calls. Just a direct message to Henri.",
  email: "hello@ironlight.ee",
  bookCall: "book a 30-min call",
  divider: "OR",
};

export const WORK_ITEMS: WorkItem[] = [
  {
    tags: ["E-commerce", "Estonia"],
    title: "WooCommerce 1",
    subtitle: "Laravel migration",
    description:
      "Legacy WooCommerce store with 3,000+ SKUs, Broken inventory sync, and no B2B pricing logic.",
    whatWeDid: [
      "Rebuilt platform on Laravel",
      "Implemented new inventory system",
      "Built API integration layer",
    ],
    result: "Order processing time reduced by 60%.",
    stack: ["Laravel", "WooCommerce", "REST API"],
  },
  {
    tags: ["E-commerce", "Estonia"],
    title: "WooCommerce 2",
    subtitle: "Laravel migration",
    description:
      "Legacy WooCommerce store with 3,000+ SKUs, Broken inventory sync, and no B2B pricing logic.",
    whatWeDid: [
      "Rebuilt platform on Laravel",
      "Implemented new inventory system",
      "Built API integration layer",
    ],
    result: "Order processing time reduced by 60%.",
    stack: ["Laravel", "WooCommerce", "REST API"],
  },
  {
    tags: ["E-commerce", "Estonia"],
    title: "WooCommerce 3",
    subtitle: "Laravel migration",
    description:
      "Legacy WooCommerce store with 3,000+ SKUs, Broken inventory sync, and no B2B pricing logic.",
    whatWeDid: [
      "Rebuilt platform on Laravel",
      "Implemented new inventory system",
      "Built API integration layer",
    ],
    result: "Order processing time reduced by 60%.",
    stack: ["Laravel", "WooCommerce", "REST API"],
  },
  {
    tags: ["E-commerce", "Estonia"],
    title: "WooCommerce 4",
    subtitle: "Laravel migration",
    description:
      "Legacy WooCommerce store with 3,000+ SKUs, Broken inventory sync, and no B2B pricing logic.",
    whatWeDid: [
      "Rebuilt platform on Laravel",
      "Implemented new inventory system",
      "Built API integration layer",
    ],
    result: "Order processing time reduced by 60%.",
    stack: ["Laravel", "WooCommerce", "REST API"],
  },
  {
    tags: ["E-commerce", "Estonia"],
    title: "WooCommerce 5",
    subtitle: "Laravel migration",
    description:
      "Legacy WooCommerce store with 3,000+ SKUs, Broken inventory sync, and no B2B pricing logic.",
    whatWeDid: [
      "Rebuilt platform on Laravel",
      "Implemented new inventory system",
      "Built API integration layer",
    ],
    result: "Order processing time reduced by 60%.",
    stack: ["Laravel", "WooCommerce", "REST API"],
  },
  {
    tags: ["E-commerce", "Estonia"],
    title: "WooCommerce 6",
    subtitle: "Laravel migration",
    description:
      "Legacy WooCommerce store with 3,000+ SKUs, Broken inventory sync, and no B2B pricing logic.",
    whatWeDid: [
      "Rebuilt platform on Laravel",
      "Implemented new inventory system",
      "Built API integration layer",
    ],
    result: "Order processing time reduced by 60%.",
    stack: ["Laravel", "WooCommerce", "REST API"],
  },
];
