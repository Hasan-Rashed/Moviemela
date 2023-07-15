import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header'


function App() {

  // Disable right click on the page
//   useEffect(() => {
//     const handleContextmenu = e => {
//         e.preventDefault()
//     }
//     document.addEventListener('contextmenu', handleContextmenu)
//     return function cleanup() {
//         document.removeEventListener('contextmenu', handleContextmenu)
//     }
// }, [ ])



  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="/movie/:id" element={<h1>Movie id Screen</h1>} /> {/* /movie:id is a dynamic route */}
          <Route path="/movies/:type" element={<h1>Movie Screen</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
