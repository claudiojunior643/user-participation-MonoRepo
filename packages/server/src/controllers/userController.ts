import { type Request, type Response } from 'express';
import User from '../models/User';
import ProblemDetail from '../factory/ProblemDetailFactory';
import { ValidationError } from 'sequelize';

class UserController {
  async findAll(req: Request, res: Response) {
    try {
      const users = await User.findAll();

      return res.status(201).json({ users });
    } catch (err) {
      if (err instanceof ValidationError) {
        const errorResponse = new ProblemDetail().buildProblemDetail(
          err,
          400,
          'Error to get all users',
          '/user',
        );
        return res.status(400).json({ errorResponse });
      }
      return res.status(400).json({ error: 'something was broken' });
    }
  }

  async create(req: Request, res: Response) {
    try {
      await User.create(req.body);

      return res.status(201).json(req.body);
    } catch (err) {
      const status = 400;

      if (err instanceof ValidationError) {
        const errorResponse = new ProblemDetail().buildProblemDetail(
          err,
          status,
          'Error to create a new user',
          '/user',
        );
        return res.status(status).json({ errorResponse });
      }
      return res.status(status).json({ error: 'something was broken' });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json(req.body);
    } catch (err) {
      const status = 400;
      if (err instanceof ValidationError) {
        const errorResponse = new ProblemDetail().buildProblemDetail(
          err,
          status,
          'Error to remove a new user',
          '/user',
        );
        return res.status(status).json({ errorResponse });
      }
      return res.status(status).json({ error: 'something was broken' });
    }
  }

  async update(req: Request, res: Response) {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json(req.body);
    } catch (err) {
      const status = 400;
      if (err instanceof ValidationError) {
        const errorResponse = new ProblemDetail().buildProblemDetail(
          err,
          status,
          'Error to update a new user',
          '/user',
        );
        return res.status(status).json({ errorResponse });
      }
      return res.status(status).json({ error: 'something was broken' });
    }
  }
}

export default new UserController();
