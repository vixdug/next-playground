import {useRouter} from 'next/router'
function Home(){
const router = useRouter()

const handleClick = (e)=> {
  e.preventDefault()
  router.push('/blog')
}

  return (
    <>
      <div>Welcome home</div>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default Home