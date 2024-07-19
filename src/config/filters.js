
export const priceRanges = [
  {
    from: 0,
    to: 100,
    title: 'Below $100'
  },
  {
    from: 100,
    to: 250,
    title: '$100 - $250'
  },
  {
    from: 250,
    to: 500,
    title: '$250 - $500'
  },
  {
    from: 500,
    to: 1000,
    title: '$500 - $1000'
  },
  {
    from: 1000,
    to: 2500,
    title: '$1000 - $2500'
  },
  {
    from: 2500,
    to: 5000,
    title: '$2500 - $5000'
  }
]

export const sortings = {
  'price-asc': {
    name: 'Sort by Lowest Price',
    param: 'priceAsc'
  },
  'price-desc': {
    name: 'Sort by Highest Price',
    param: 'priceDesc'
  },
  date: {
    name: 'Sort by Newest',
    param: 'date'
  }
}
