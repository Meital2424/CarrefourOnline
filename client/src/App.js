import { useSelector } from 'react-redux';
import Enter from './components/enter';
// import AdminNav from './components/navs/AdminNav';
import Login from "./components/login";
// import CustomerNav from './components/navs/CustomerNav';
import { BrowserRouter } from 'react-router-dom';
import ManagerHeaderNavBar from './components/navBars/navBarManager';
import UserHeaderNavBar from "./components/navBars/navBarUser"




function App() {
const currentUser = useSelector(u=>u.user.currentUser)
const statusUser = useSelector(s=>s.user.status)

  return (
    <BrowserRouter>
    {(statusUser=="none"&&currentUser==null)?<Enter/>:statusUser=="admin"?<ManagerHeaderNavBar/>:currentUser==null?<Login/>:<UserHeaderNavBar/>}
    </BrowserRouter>
  )
    
}

export default App;
