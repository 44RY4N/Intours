const controller = require(`${__dirname}/../controllers/filterController.js`);

// This implements like a controller to maintain the MVC Architecture

const filter = (tours, query) => {
  // Formatted Structure for Ease of Access at FrontEnd

  if (query.region) {
    const regionResult = controller.filterByRegion(tours.data, query.region);
    tours.data = regionResult.data;
    tours.meta.states = regionResult.states;
    tours.meta.region = query.region;
  }

  if (query.state) {
    tours.data = controller.filterByState(tours.data, query.state);
  }

  if (query.name) {
    tours.data = controller.filterByName(tours.data, query.name);
  }

  if (query.rating) {
    tours.data = controller.filterByRating(tours.data, query.rating);
  }

  return tours;
};

module.exports = filter;
