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

  getAll: () => {
    return db.Locations.findAll({
      include: {
        association: 'childLocation',
      },
    });
  },

  delete: (name) => {
    return db.Locations.destroy({ where: { name } });
  },
};

export default locationService;
