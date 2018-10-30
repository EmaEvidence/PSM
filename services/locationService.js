import db from '../models/index';

const locationService = {
  add: (data) => {
    return db.Locations.findOrCreate({ where: data });
  },

  get: (name) => {
    return db.Locations.findOne({
      where: {
        name,
      },
    });
  },
};

export default locationService;
