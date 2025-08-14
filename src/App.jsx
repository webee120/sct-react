import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workthrough from "./component/pages/Workthrough"
import Login from "./component/pages/Login"
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Workthrough />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
