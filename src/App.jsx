import Login from './Pages/login/Login';
import Dashbord from './Pages/Dashboad/Dashboard';
import Profile from './Pages/profile/Profile';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/dashboard" element={<Dashbord/>}/>
          <Route path="/profile" element={<Profile/>}/>
          {/* <Route path='/home' element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
