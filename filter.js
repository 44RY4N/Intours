const {
  filterByRegion,
  filterByState,
  filterByRating,
} = require('./filterByFeild.js');

const filter = (tours, query) => {
  let filteredTours;
  if (query.region) {
    filteredTours = filterByRegion(tours, query.region);
  } else if (query.state) {
    filteredTours = filterByState(tours, query.state);
  } else filteredTours = tours;

  if (query.rating) {
    filteredTours = filterByRating(filteredTours, query.rating);
  }

  return filteredTours;
};
module.exports = filter;
