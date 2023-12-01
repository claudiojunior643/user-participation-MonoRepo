import { Sequelize } from 'sequelize-typescript';

const config = require('./database');

const sequelize = new Sequelize({ ...config });

export default sequelize;
