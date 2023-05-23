import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import Otp_page from "./otp/Otp_page"
import { UserAuthContextProvider } from "./context/UserAuthContext";
import NewsList from "./news/NewsList";
import RegForm from "./news/RegForm";
import AdminHome from "./admin/AdminHome";
import ComplaintStatus from "./userComplaintList/ComplaintStatus";
import DeptHome from "./deptComplaintList.jsx/DeptHome";

function App() {

  return (
    <>
      <UserAuthContextProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/otp" element={<Otp_page/>}/>
            <Route path="/dashboard" element={<NewsList/>}/>
            <Route path="/form" element={<RegForm/>}/>
            <Route path="/admin" element={<AdminHome/>}/>
            <Route path="/track" element={<ComplaintStatus/>}/>
            <Route path="/dept" element={<DeptHome/>}/>
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>

    </>
  )
}

export default App
