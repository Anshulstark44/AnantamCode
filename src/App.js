import React from 'react'
import "./App.css"
import Home from "./pages/Home"

import { useDispatch } from "react-redux"
import { useEffect } from 'react'

import { Route, Routes ,useNavigate } from 'react-router-dom'
import Navbar from './components/Common/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import UpdatePassword from './pages/UpdatePassword'
import VerifyEmail from './pages/verifyEmail'
import About from './pages/About'
import OpenRoute from './components/Core/Auth/OpenRoute'
import PrivateRoute from './components/Core/Auth/PrivateRoute'
import Dashboard from './pages/Dashboard'
import Error from "./pages/Error"
import EnrolledCourses from "./components/Core/Dashboard/EnrolledCourses"
import Cart from './components/Core/Dashboard/Cart'
import { ACCOUNT_TYPE } from './utils/constants'
import Settings from "./components/Core/Dashboard/Settings"
import MyProfile from './components/Core/Dashboard/MyProfile'
import { useSelector } from "react-redux"
import AddCourse from './components/Core/Dashboard/AddCourse'
import MyCourses from './components/Core/Dashboard/MyCourses'
import EditCourse from './components/Core/Dashboard/EditCourse'
import Catalog from './pages/Catalog'
import CourseDetails from './pages/CourseDetails'
import ViewCourse from './pages/ViewCourse'
import InstructorChart from './components/Core/Dashboard/InstructorDashboard/InstructorChart'
import Contact from './pages/Contact'
import { getUserDetails } from "./services/operations/profileAPI"



const App = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
  }, [])




  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
      
      <Navbar></Navbar>

        <Routes>
            <Route path='/' element={<OpenRoute><Home></Home></OpenRoute>}></Route>
            <Route path='catalog/:catalogName' element={<OpenRoute><Catalog/></OpenRoute>}></Route>
            <Route path='catalog/:courseId' element={<OpenRoute><CourseDetails/></OpenRoute>}></Route>

            <Route path='/Signup' element={<OpenRoute><Signup></Signup></OpenRoute>}></Route>
            <Route path='/Login' element={<OpenRoute><Login></Login></OpenRoute>}></Route>
            <Route path='/forgot-password' element={<OpenRoute><ForgotPassword></ForgotPassword></OpenRoute>}></Route>
            <Route path='/update-password/:id' element={<OpenRoute><UpdatePassword></UpdatePassword></OpenRoute>}></Route>
            <Route path='/verify-email' element={<OpenRoute><VerifyEmail></VerifyEmail></OpenRoute>}></Route>
            <Route path='/about' element={<OpenRoute><About></About></OpenRoute>}></Route>
            <Route path='/contact' element={<OpenRoute><Contact/></OpenRoute>}></Route>
              {/* Error Page */}

            {/* Private Route */}
            {/* Nested Route OF Dashboard */}
            <Route element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
                <Route path='/dashboard/my-profile' element={<MyProfile/>}></Route>
                <Route path='/dashboard/settings' element={<Settings/>}></Route>


                {
                  user?.accountType === ACCOUNT_TYPE.STUDENT && (
                    <>
                    <Route path='/dashboard/enrolled-courses' element={<EnrolledCourses></EnrolledCourses>}></Route>
                    <Route path='/dashboard/cart' element={<Cart/>}></Route>
                    </>
                  )
                }
                {
                  user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                    <>
                      <Route path='/dashboard/add-course' element={<AddCourse/>}></Route>
                      <Route path='/dashboard/my-courses' element={<MyCourses/>}></Route>
                      <Route path='/dashboard/instructor/:courseId' element={<EditCourse/>}></Route>
                      <Route path='/dashboard/instructor/:userId' element={<MyProfile/>}></Route>

                    
                    </>
                  )
                }

            </Route>

            <Route  element={
              <PrivateRoute>
                <ViewCourse/>
              </PrivateRoute>
            }>
              {
                user?.accountType === ACCOUNT_TYPE.STUDENT && (
                  <>
                  <Route path='view-course/:courseId/section/:sectionId/sub-section/:subSectionId' 
                  element={<videoDetails/>}></Route>
                  </>
                )
              }

            </Route>

            <Route path='*' element={<Error></Error>}></Route>
        </Routes>

    </div>
  )
}

export default App
