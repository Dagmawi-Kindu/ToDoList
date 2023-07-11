import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { List } from './models/List';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'TodoApp',
  synchronize: true,
  logging: false,
  entities: [List],
  migrations: [],
  subscribers: [],
});
