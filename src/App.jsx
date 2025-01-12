import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <Router>
      <div className="bg-[#0a192f] min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App