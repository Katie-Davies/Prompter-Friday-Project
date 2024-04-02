import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { CommentData, Comment } from '../../models/prompt'

export default function useDeleteComment() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: Comment) => {
      await request.delete(`/api/v1/comments/${data.id}`)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })
}
