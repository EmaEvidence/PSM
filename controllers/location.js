import locationService from '../services/locationService';
import handleResponse from '../helpers/handleResponse';
import pruneResponse from '../helpers/pruneResponse';

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
    return res.status(200);
  },

  get: (req, res) => {
    const name = req.body.name || req
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

  delete: (req, res) => {
    return res.status(200);
  }

}

export default location;
