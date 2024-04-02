import useGetUser from '../hooks/getUser'

function User(id) {
  console.log('user', id)
  const { userId } = id
  const { data } = useGetUser(userId)

  if (data) return <h1>{data?.nickname}</h1>
}

export default User
