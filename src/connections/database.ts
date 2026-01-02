import 'reflect-metadata'

import { DataSource } from 'typeorm'
import { config } from 'dotenv'
import * as Schema from '@/schemas'

config()

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env

if (!DB_HOST || !DB_USER || !DB_PASSWORD || !DB_NAME) {
  throw new Error('Missing Database Configuration in .env file')
}

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT) || 3306,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,

  entities: Object.values(Schema),
  migrations: ['src/migrations/**/*.ts'],
  synchronize: false,
  logging: ['error'],
})

export async function connectDatabase() {
  try {
    await AppDataSource.initialize()
    console.log('Data Source has been initialized!')
  } catch (err) {
    console.error('Error during Data Source initialization:', err)
    throw err
  }
}
