export const menu = {
  drinks: [
    {
      item: 'drink',
      size: {
        single: 'sml',
        double: 'dbl',
        triple: 'trpl',
      },
    },
    {
      item: 'espresso',
      size: {
        single: 2.08,
        double: 2.56,
        triple: 3.08,
      },
    },
    {
      item: 'macchiato',
      size: {
        single: Number.parseFloat(3.2).toFixed(2),
        double: 2.95,
        triple: 3.45,
      },
    },
    {
      item: 'latte',
      size: {
        single: Number.parseFloat(2.6).toFixed(2),
        double: Number.parseFloat(3.2).toFixed(2),
        triple: 3.95,
      },
    },
  ],
  food: [
    {
      item: 'croissant',
      pricing: Number.parseFloat(2.5).toFixed(2),
    },
    {
      item: 'spinach pie',
      pricing: 2.99,
    },
    {
      item: 'sandwich',
      pricing: 4.99,
    },
  ],
};
