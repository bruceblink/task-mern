import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className='container'>
        {/**添加Header */}
        <Header />
        {/*在路由中添加Components*/}
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
