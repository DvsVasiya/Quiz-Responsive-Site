
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Quiz from './pages/Quiz'

function App() {
console.log("test url....", window)
  return (
    <>
    <Dashboard />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/quiz" element={<Quiz />} /> 
      </Routes>
    </>
  )
}

export default App
