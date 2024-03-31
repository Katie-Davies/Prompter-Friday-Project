import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { CommentData } from '../../models/prompt'

export default function useCreateComment(promptId: string) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: CommentData) => {
      await request.post(`/api/v1/comments/${promptId}`).send(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })
}

//add data back into query invalidate if need to
