import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import { io } from "socket.io-client"
import SocketContext from "./context/SocketContext";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

//Socket io
const socket = io(process.env.REACT_APP_API_ENDPOINT.split("/api/v1")[0]);

function App() {
  
  const { user } = useSelector((state) => state.user)
  const { files } = useSelector((state) => state.chat)
  console.log("files", files.payload)
  const { token } = user;
  
  return (
    <div className="dark">
      <SocketContext.Provider value={socket}>
        <Router>
          <Routes>
          <Route exact path="/" element={token ? <Home/> : <Navigate to="/login" />}/>
          <Route exact path="/login" element={!token ? <Login /> : <Navigate to="/" /> }/>
          <Route exact path="/register" element={!token ? <Register /> : <Navigate to="/" /> }/>
          </Routes>
        </Router>
      </SocketContext.Provider>
    </div>

  );
}

export default App;
