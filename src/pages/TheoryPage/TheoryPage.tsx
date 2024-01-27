import { useParams } from 'react-router-dom';

const TheoryPage = () => {
  const {id} = useParams()
  console.log(id)
  return (
    <div>
      <h1>{id}qweqweeweweq</h1>
    </div>
  )
}

export default TheoryPage