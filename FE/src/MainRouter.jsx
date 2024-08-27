import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter } from 'react-router-dom';

import BaseLayout from './Components/Base/BaseLayout.jsx';
import Home from './Components/Home/Home.jsx'
import About from './Pages/About.jsx';
import Login from './Pages/temp/Login.jsx';
import PersistLogin from './utils/PersistLogin.jsx';
import ValidateLogin from './utils/ValidateLogin.jsx';

import Profile from './Pages/Profile.jsx';
import SignInForm from './Components/Auth/SignInForm.jsx';
import WriteStory from './Components/WriteStory/WriteStory.jsx';
import AddChapter from './Components/WriteStory/AddChapter/AddChapter.jsx';
import Explore from './Components/Explore/Explore.jsx';
// let rout = createBrowserRouter(
//   createRoutesFromElements(
const MainRouter = () => {
  return <Routes>
    <Route path="/user/login" element={<Login />} />
    <Route path="user/signup" element={<SignInForm />} />
    <Route element={<PersistLogin />} >
    <Route element={<ValidateLogin />} >
    <Route path="my-work-story" >
<Route path="" element={< WriteStory />} />
<Route path="write-chapter" element={< AddChapter />} />
    </Route>
      <Route path="/" element={<BaseLayout />}>
       
        <Route path="" element={<Home />} />

          <Route path='about' element={<About />} />
          <Route path="explore" element={< Explore />} />
 
          <Route path="profile" element={< Profile />} >
          <Route path="about" component={About} />
            {/* <Route path="/conversations" component={Conversations} />
            <Route path="/following" component={Following} /> */}
          
          </Route>

          <Route path="account" element={<Profile />} >
       
          </Route>
        </Route>


      </Route>

    </Route>




  </Routes>



}

//   )
// );

export default MainRouter