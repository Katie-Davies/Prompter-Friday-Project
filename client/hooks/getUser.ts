import request from 'superagent'
import { User } from '../../models/prompt'
import { useQuery } from '@tanstack/react-query'

// export default async function getUser(id: User) {
//   await request.get(`/api/v1/users/${id}`)
// }

export default function useGetUser(id: string | undefined) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/users/${id}`)
      if (res.ok) {
        return res.body as User
      }

      throw new Error(res.text)
    },
  })
}
