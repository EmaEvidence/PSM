import handleResponse from '../helpers/handleResponse';

export const validateName = (req, res, next) => {
  let { name } = req.body;
  if (!name) {
    name = req.params;
  }
  if (name.trim().length === 0 || !name || name.trim().length < 2) {
    return handleResponse(res, 400, 'Invalid name, Location name must be greated than 1 character and must be letters')
  }
  return next();
};

export const validateMale = (req, res, next) => {
  const { male } = req;
  if (male.trim().length === 0 || !male || male.trim().length < 2) {
    return handleResponse(res, 400, 'Invalid male count, Male count must be a number')
  }
  return next();
};

export const validateFemale = (req, res, next) => {
  const { female } = req;
  if (female.trim().length === 0 || !female || female.trim().length < 2) {
    return handleResponse(res, 400, 'Invalid female count, Female count must be a number')
  }
  return next();
};

export const validateParentLocation = (req, res, next) => {
  const { parentLocation } = req;
  if (parentLocation.trim().length === 0 || !parentLocation || parentLocation.trim().length < 2) {
    return handleResponse(res, 400, 'Invalid parent location name, Parent Location name must be greated than 1 character and must be letters')
  }
  return next();
};

// assumptions
// Location must be unique and must be at least 2 letters
// It will be easier to next locations using its name than id
