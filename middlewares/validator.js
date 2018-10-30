import handleResponse from '../helpers/handleResponse';
import locationService from '../services/locationService';

export const validateName = (req, res, next) => {
  let { name } = req.body;
  if (!name || name === undefined || name.trim().length === 0 || name.trim().length < 2) {
    return handleResponse(res, 400, 'Invalid name, Location name must be greated than 1 character and must be letters')
  }
  return next();
};

export const validateMale = (req, res, next) => {
  const { male } = req.body;
  if (!male || male.trim().length === 0 || isNaN(male) || parseInt(male, 10) < 0) {
    return handleResponse(res, 400, 'Invalid male count, Male count must be a number greater or equal to zero');
  }
  return next();
};

export const validateFemale = (req, res, next) => {
  const { female } = req.body;
  if (!female || female.trim().length === 0 || isNaN(female) || parseInt(female, 10) < 0) {
    return handleResponse(res, 400, 'Invalid female count, Female count must be a number greater or equal to zero');
  }
  return next();
};

export const validateParentLocation = (req, res, next) => {
  const { parentLocation } = req.body;
  if (!parentLocation) {
    return next();
  } else if (parentLocation.trim().length === 0 || parentLocation.trim().length < 2) {
    return handleResponse(res, 400, 'Invalid parent location name, Parent Location name must be greated than 1 character and must be letters')
  } else {
    locationService.get(parentLocation)
      .then((response) => {
        req.body.parentLocationId = response.dataValues.id;
        next();
        console.log(response.dataValues, '-==-=-=-=response-=-=-=-=-=-=-=')
      })
      .catch((error) => {
        return handleResponse(res, 404, 'Invalid Parent location name, Parent Location name does not exist');
      })
  }
};

// assumptions
// Location must be unique and must be at least 2 letters
// It will be easier to next locations using its name than id
