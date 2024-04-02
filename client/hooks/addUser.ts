import request from 'superagent'
import { User } from '../../models/prompt'

export default async function addUser(data: User) {
  await request.post('/api/v1/users').send(data)
}
