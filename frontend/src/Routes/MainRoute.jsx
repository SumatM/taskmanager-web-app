import Login from "../Pages/Login"
import {Routes,Route} from 'react-router-dom'
import Signup from "../Pages/signup"


export const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={""}></Route>
    </Routes>
  )
}
