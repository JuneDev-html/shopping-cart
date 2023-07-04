export const menu = {
  drinks: [
    // {
    //   item: 'drink',
    //   pricing: 'pricing',
    // },
    {
      name: 'espresso',
      description: 'italian roast',
      pricing: 2.08,
    },
    {
      name: 'macchiato',
      description: 'italian roast, dollop of foam',
      pricing: Number.parseFloat(3.2).toFixed(2),
    },
    {
      name: 'latte',
      description: 'espresso, steamed milk, layer of frothed milk',
      pricing: Number.parseFloat(2.6).toFixed(2),
    },
  ],
  food: [
    {
      name: 'croissant',
      description: 'fresh baked',
      pricing: Number.parseFloat(2.5).toFixed(2),
    },
    {
      name: 'pie',
      description:
        'spinach pie - spinach, feta cheese, seasonings baked in phyllo',
      pricing: 2.99,
    },
    {
      name: 'sandwich',
      description: 'croissant, ham, lettuce, tomato',
      pricing: 4.99,
    },
  ],
};
