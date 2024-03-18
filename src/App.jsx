import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Openroute from "./component/core/Auth/Openroute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verifyemail from "./pages/Verifyemail";
import Forgotpassword from "./pages/Forgotpassword";
import Resetpasswords from "./pages/Resetpassword";
import About from './pages/About';
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Myprofile from "./component/core/Dashboard/Myprofile";
import Setting from "./component/core/Dashboard/Setting/Setting";
import Privateroute from "./component/core/Auth/Privateroute";
import { Account_type } from "./utils/constant";
import {useSelector} from 'react-redux';
import AddCourse from "./component/core/Dashboard/Addcourse";
function App() {
  const {user}=useSelector(state=>state.profile)
  return (
    <>
      <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Openroute><Login/></Openroute>}></Route>
            <Route path="/signup" element={<Openroute><Signup/></Openroute>}></Route>
            <Route path="/verifyemail" element={<Openroute><Verifyemail/></Openroute>}></Route>
            <Route path="/forgotpassword" element={<Openroute><Forgotpassword/></Openroute>}></Route>
            <Route path="/resetpassword/:id" element={<Openroute><Resetpasswords/></Openroute>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route element={<Privateroute><Dashboard/></Privateroute>}>
                  <Route path='/dashboard/myprofile' element={<Myprofile/>}/>
                  <Route path='/dashboard/settings' element={<Setting/>}/>

                  {
                    user && Account_type.instructor===user.accounttype &&
                    <>
                      <Route path='/dashboard/addcourse' element={<AddCourse/>}/>
                    </>
                  }
            </Route>
          </Routes>
      </div>
    </>
  );
}

export default App;
