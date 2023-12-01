import sequelize from '../config/connection';

import { INTEGER, Model, STRING } from 'sequelize';

class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public shares!: number;
}

User.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 200],
          msg: 'firstName field is invalid',
        },
      },
    },
    lastName: {
      type: STRING,
      allowNull: false,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 200],
          msg: 'lastName field is invalid',
        },
      },
    },
    stocks: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: {
          args: [1],
          msg: 'shares field is invalid',
        },
      },
    },
  },
  {
    sequelize,
  },
);

export default User;
