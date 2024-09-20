
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Quiz from './pages/Quiz'
import Summary from './pages/Summary'

function App() {


const handlePageRedurect = (path: string) => {
  navigate(`/${path}`); 
};

const navigate = useNavigate();


  return (
    <>
    <button onClick={() => handlePageRedurect("dashboard")}>Dashboard</button>
    <button onClick={() => handlePageRedurect("quiz")}>Quiz</button>
    <button onClick={() => handlePageRedurect("summary")}>Summary</button>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route  path="/quiz/:id/:qid" element={<Quiz />}/>
        <Route path="/quiz"  /> 
        <Route path="/summary" element={<Summary />} /> 
      </Routes>
    </>
  )
}

export default App
