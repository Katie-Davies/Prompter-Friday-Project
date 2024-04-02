import useComments from '../hooks/use-comments'
import { useAuth0 } from '@auth0/auth0-react'
import useDeleteComment from '../hooks/useDeleteComment'
import { Comment } from '../../models/prompt'
import User from './User'
import useGetUser from '../hooks/getUser'

interface Props {
  id: number
}

function Comments({ id }: Props) {
  const { user } = useAuth0()
  const promptid = Number(id)
  const { data, isError, isPending, error } = useComments(promptid)

  const deleteComment = useDeleteComment()

  function handleClick(comment: Comment) {
    if (deleteComment.isPending) {
      return
    }
    deleteComment.mutate(comment)
  }

  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>An Error has occurred</p>
    console.log(error?.message)
  }

  if (data)
    return (
      <>
        <div className="app">
          <h1>Comments</h1>
          <ul>
            {data.map((comment) => (
              <li key={comment.id} className="card">
                <User userId={comment.user_id} />
                <p>{comment.comment}</p>
                <button
                  key={comment.id}
                  onClick={() => handleClick(comment)}
                  id="button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
}

export default Comments
