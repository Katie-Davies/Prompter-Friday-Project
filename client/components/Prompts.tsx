import usePromptById from '../hooks/use-prompt-by-id'
import Comments from './Comments'
import { useParams } from 'react-router-dom'
import Form from './Form.tsx'

function Prompts() {
  const { id } = useParams()
  const promptid = Number(id)
  const { data, isPending, isError, error } = usePromptById(promptid)

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
        <div className="app comments">
          <h1>{data.prompt}</h1>
          <Comments id={data.id} />
          <Form id={data.id} />
        </div>
      </>
    )
}

export default Prompts
