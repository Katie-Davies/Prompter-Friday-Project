import { Link } from 'react-router-dom'

import usePrompts from '../hooks/use-prompts'

function Home() {
  const { data, isError, isPending, error } = usePrompts()

  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>An Error has occurred</p>
    console.log(error?.message)
  }
  if (data) {
    return (
      <>
        <div className="app">
          <h1 className="heading-secondary">Choose a Prompt</h1>
          <ul className="prompt-list">
            {data.map((prompt) => (
              <li className="list-element" key={prompt.id}>
                <Link to={`/prompts/${prompt.id}`}> {prompt.prompt}</Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default Home
