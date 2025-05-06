import {useEffect, useState} from 'react'

const Home = () => {

  const [uname, setName] = useState();
  useEffect(() => {
    const name = localStorage.getItem('username');
    setName(name);
  }, [])
  return (
    <div>Hello, {uname}</div>
  )
}

export default Home