import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtectedRoute";
import {Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom';
import {store} from "./Redux/store"
import {useSelector} from 'react-redux'

function App() {
  const storez= useSelector((store)=>store.login.login)
  console.log(store.getState())
  return (
    <div className="App">
      <div style={{margin:"auto", textAlign:"center"}} >
        <Link style={{marginRight:"10px"}}className="nav-home" to="/">
          Home
        </Link>
        {storez==true?<Link className="nav-logout" to="/logout">Logout</Link>:<Link className="nav-login" to="/login">Login</Link>}
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/orders" element={<ProtectedRoute><Orders/></ProtectedRoute>}></Route>
        <Route path="/neworder" element={<ProtectedRoute><NewOrder/></ProtectedRoute>}></Route>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
      </Routes>
    </div>
  );
}

export default App;
