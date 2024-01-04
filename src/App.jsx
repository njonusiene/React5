import { useEffect, useState } from 'react'
import PrintUser from './components/PrintUser'
import Loading from './components/Loading'
import './App.css'

function App() {

  const [user, setUser] = useState()
  const [isLoaded, setIsLoaded] = useState(false)

  //Info uzkrovimas is API
  const fetchData = async () => {
    const resp = await fetch('https://api.github.com/users/dkoncius')
    const data = await resp.json()
    setUser(data)
  }
 
  useEffect(() =>{
    fetchData()
  }, [])

  //uzskrovimo animacija
  useEffect (() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 500)
  }, [user])

  return (
    <>
    <div className="card">
    {isLoaded && user ? 
        <PrintUser user={user} fetchData={fetchData} />
       : <Loading/>
      }
    </div>
    </>
  )
}

export default App
