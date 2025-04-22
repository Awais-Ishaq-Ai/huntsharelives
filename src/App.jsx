import { useState } from 'react'
import './App.css'
import Navbar from './ReuseableComponent/Navbar'
import Home1 from './Component/Home1'
import Home2 from './Component/Home2'
import Search from './Search/Search'
import Footer from './ReuseableComponent/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home1 />
      <Home2 />
      <Search />
      <Footer />
    </>
  )
}

export default App
