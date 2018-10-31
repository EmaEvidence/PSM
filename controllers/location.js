import locationService from '../services/locationService';
import handleResponse from '../helpers/handleResponse';
import pruneResponse from '../helpers/pruneResponse';
import computeTotalPopulation from '../helpers/computeTotalPopulation';

const location = {
  add: (req, res) => {
    const { name, male, female, parentLocationId } = req.body;
    locationService.add({ name, male, female, parentLocationId })
      .then((response) => {
        if (response[1]) {
          return handleResponse(res, 201, 'Location created', pruneResponse(response[0].dataValues));
        }
        return handleResponse(res, 409, 'Contact already exist');
      })
      .catch((error) => {
        const errorObj = error.errors[0] || {};
        if (errorObj.message === 'name must be unique') {
          return handleResponse(res, 409, 'Location Name must be Unique');
        }
        return handleResponse(res, 500, 'Error creating Location');
      });
  },

  update: (req, res) => {
    const { name, male, female, parentLocationId } = req.body;
    const oldName = req.params.name;
    locationService.update(oldName, { name, male, female, parentLocationId })
      .then(([response]) => {
        if (response === 0) {
          return handleResponse(res, 404, 'Location not found');
        }
        return handleResponse(res, 200, 'Location Edited');
      })
      .catch((error) => {
        const errorObj = error.errors[0] || {};
        if (errorObj.message === 'name must be unique') {
          return handleResponse(res, 409, 'Location Name must be Unique');
        }
        return handleResponse(res, 500, 'Error creating Location');
      });
  },

  get: (req, res) => {
    const name = req.body.name || req.params.name;
    locationService.get(name)
      .then((response) => {
        if (response) {
          return handleResponse(res, 201, 'Location created', pruneResponse(response[0].dataValues));
        }
        return handleResponse(res, 409, 'Contact already exist');
      })
      .catch((error) => {
        const errorObj = error.errors[0] || {};
        if (errorObj.message === 'name must be unique') {
          return handleResponse(res, 409, 'Location Name must be Unique');
        }
        return handleResponse(res, 500, 'Error creating Location');
      });
    return res.status(200);
  },

  getAll: (req, res) => {
    locationService.getAll()
      .then((response) => {
        if (!response) {
          return handleResponse(res, 404, 'Locations not found');
        }
        return handleResponse(res, 200, 'Locations loaded',
          computeTotalPopulation(pruneResponse(response, 'get')));
      })
      .catch(() => handleResponse(res, 500, 'Error loading Locations'));
  },

  delete: (req, res) => {
    const { name } = req.params;
    locationService.delete(name)
      .then((response) => {
        if (response === 0) {
          return handleResponse(res, 404, 'Location not found');
        }
        return handleResponse(res, 200, 'Location deleted');
      })
      .catch(() => handleResponse(res, 500, 'Error deleting Location'));
  },

};

export default location;
