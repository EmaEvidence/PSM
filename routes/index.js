import { Router } from 'express';
import location from '../controllers/location';
import * as validator from '../middlewares/validator';

const Route = Router();


Route.post('/location', validator.validateName, validator.validateMale,
  validator.validateFemale, validator.validateParentLocation, location.add);

Route.get('/locations', location.get);

Route.delete('/location/:name', location.delete);

Route.put('/location/:name', validator.validateName, validator.validateMale,
  validator.validateFemale, validator.validateParentLocation, location.update);

export default Route;
