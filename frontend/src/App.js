import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          {/**添加Header */}
          <Header />
          {/*在路由中添加Components*/}
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/alltasks' element={<TaskList />}></Route>
            {/**添加404页面 */}
            <Route path='*' element={<h1>404 Not Found</h1>}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
