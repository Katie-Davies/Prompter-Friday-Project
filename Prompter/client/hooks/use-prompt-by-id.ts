import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Prompt } from '../../models/prompt'

export default function usePromptById(id: number) {
  return useQuery({
    queryKey: ['prompt'],
    queryFn: async () => {
      const res = await request.get(`/api/v1/prompts/${id}`)
      if (res.ok) {
        return res.body as Prompt
      }

      throw new Error(res.text)
    },
  })
}
