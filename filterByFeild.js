const filterByRegion = (tours, region) => {
  console.log('filtering by region 🧭');
  return tours.filter((tour) => tour.Zone === region);
};

const filterByState = (tours, state) => {
  console.log('filtering by State ⛰🌊🏙');
  return tours.filter((tour) => tour.State === state);
};

const filterByRating = (tours, order) => {
  console.log('filtering by rating ⭐🌟🌟🌟⭐');
  if (order === 'a') {
    return tours.sort(
      (a, b) => a['Google review rating'] - b['Google review rating'],
    );
  }
  if (order === 'd') {
    return tours.sort(
      (a, b) => b['Google review rating'] - a['Google review rating'],
    );
  }
  return tours;
};

module.exports = { filterByRegion, filterByState, filterByRating };
