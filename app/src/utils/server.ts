import express from 'express'
import {Express} from 'express-serve-static-core'
import { postController } from '../api/controllers/PostController'


/**
 * Basic server creation. You'll need to add the controllers in her like how the postController alread is.
 * 
 * @returns Promise<Express>
 */

export async function createServer(): Promise<Express> 
{
  const server: Express = express()
  server.use(postController)
  return server
}