import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import HomeScreen from './screens/HomeScreen'


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
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
