import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Prompt } from '../../models/prompt'

export default function usePrompts() {
  return useQuery({
    queryKey: ['prompts'],
    queryFn: async () => {
      const res = await request.get('/api/v1/prompts')
      if (res.ok) {
        return res.body as Prompt[]
      }

      throw new Error(res.text)
    },
  })
}
