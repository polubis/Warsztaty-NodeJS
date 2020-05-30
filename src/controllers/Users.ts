import express from 'express';

import { UsersService } from '../services';
import { BadRequest } from '../utils';

const UsersController = express.Router();

UsersController.get('', (req, res, next) => {
  res.sendStatus(200);
});

UsersController.post('', (req, res, next) => {
  const user = UsersService.create(req.body);

  res.sendStatus(200);
});

export default UsersController;
