import { useState } from 'react'
import useCreateComment from '../hooks/add-comment'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  id: number
}

function Form({ id }: Props) {
  const { isAuthenticated, user } = useAuth0()

  const promptId = String(id)
  const initialState = {
    comment: '',
    user_id: '',
  }

  const [newComment, setNewComment] = useState(initialState)

  const createComment = useCreateComment(promptId)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const val = e.target.value

    setNewComment({
      // ...newComment,
      [name]: val,
      user_id: user?.sub,
    })
  }
  console.log(typeof user?.sub)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (id) {
      createComment.mutate(newComment)
      setNewComment(initialState)
    }
  }

  return (
    <>
      <div className="app">
        {isAuthenticated ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="comment">Add a Comment</label>
            <input
              type="text"
              name="comment"
              onChange={handleChange}
              value={newComment.comment}
            ></input>
            <button type="submit">Submit comment</button>
          </form>
        ) : (
          <p>Please sign in to comment</p>
        )}
      </div>
    </>
  )
}

export default Form
