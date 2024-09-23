
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Quiz from './pages/Quiz'
import Summary from './pages/Summary'
import Home from './pages/Home'
import SplashScreen from './componentts/SplashScreen'
import { useSelector } from 'react-redux'

function App() {


const handlePageRedurect = (path: string) => {
  navigate(`/${path}`); 
};

const navigate = useNavigate();

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route  path="/quiz/:id/:qid" element={<Quiz />}/>
        <Route path="/quiz"  /> 
        <Route path="/summary" element={<Summary />} /> 
      </Routes>
    </>
  )
}

export default App
