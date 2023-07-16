import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const { user } = useSelector((state) => state.user)
  const { access_token } = user;
  return (
    <div className="dark">
      <Router>
        <Routes>
          <Route exact path="/" element={access_token ? <Home/> : <Navigate to="/login" />}/>
          <Route exact path="/login" element={!access_token ? <Login /> : <Navigate to="/" /> }/>
          <Route exact path="/register" element={!access_token ? <Register /> : <Navigate to="/" /> }/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
