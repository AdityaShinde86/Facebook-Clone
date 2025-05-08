import './App.css'
import Home from './Pages/home/Home'
import Profile from './Pages/profile/Profile'
import Login from './Pages/login/Login'
import Register from './Pages/register/Register'
import Layout from './Components/layout/Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'



function App() {
 let router = createBrowserRouter(
  createRoutesFromElements(
        <Route path='/'element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Route>
   )
 )
 return (
    <>
      {/* <Home />
     <Profile/>
     <Login/>
     <Register/> */}
    <RouterProvider router = {router}/>
    </>  
  )
}

export default App
