import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Comment } from '../../models/prompt'

export default function useComments(promptId: number) {
  return useQuery({
    queryKey: ['comments', promptId],
    queryFn: async () => {
      const res = await request.get(`/api/v1/comments/${promptId}`)
      if (res.ok) {
        return res.body as Comment[]
      }

      throw new Error(res.text)
    },
  })
}
