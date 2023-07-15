
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';
import ChangePassword from './components/ChangePassword';
import Students from './components/Students';
import Hods from './components/HODs';
import AddHod from './components/AddHod';
import StudentHome from './components/StudentHome';
import Companies from './components/Companies';
import AddCompany from './components/AddCompany';
import UploadStudentInfo from './components/UploadStudentInfo';
import CompanyHome from './components/CompanyHome';
import HodHome from './components/HodHome';
import Settings from './components/Settings';
import CompJobs from './components/CompJobs';
import AddJob from './components/AddJob';
import JobDetails from './components/JobDetails';
import Applications from './components/Applications';
import AppliedJobs from './components/AppliedJobs';
import ApplicationDetails from './components/ApplicationDetails';
import SelectedStudents from './components/SelectedStudents';
import HomePage from './components/home';
import EditCompany from './components/EditCompany';
import EditHod from './components/EditHod';
import EditStudent from './components/EditStudent';
import ViewStudent from './components/ViewStudent';
import ForgotPass from './components/ForgotPass';
import LoginStudent from './components/LoginStudent';
import LoginProctor from './components/LoginProctor';
import LoginCompany from './components/LoginCompany';
import LoginDean from './components/LoginDean';
import DHeader from './components/DHeader';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Header />} path="/" exact />
          {/* <Route element={<HomePage />} path="/" exact /> */}
          <Route element={<RegisterPage />} path="/addstudent" />
          <Route element={<AddHod />} path="/addhod" />
          <Route element={<AddCompany />} path="/addcompany" />
          <Route element={<AddJob />} path="/addjob" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Students />} path="/students" />
          <Route element={<ViewStudent />} path="/sview/:cid" />
          <Route element={<EditStudent />} path="/students/:cid" />
          <Route element={<Companies />} path="/companies" />
          <Route element={<EditCompany />} path="/companies/:cid" />
          <Route element={<StudentHome />} path="/shome" />
          <Route element={<CompanyHome />} path="/chome" />
          <Route element={<HodHome />} path="/hhome" />
          <Route element={<UploadStudentInfo />} path="/uploadinfo" />
          <Route element={<Hods />} path="/hods" />
          <Route element={<EditHod />} path="/hods/:cid" />
          <Route element={<CompJobs />} path="/jobs" />
          <Route element={<JobDetails />} path="/jobs/:jid" />
          <Route element={<ApplicationDetails />} path="/application/:aid" />
          <Route element={<Settings />} path="/settings" />
          <Route element={<AppliedJobs />} path="/appliedjobs" />
          <Route element={<Applications />} path="/applications" />
          <Route element={<SelectedStudents />} path="/selections" />
          <Route element={<ChangePassword />} path="/changepwd" />
          <Route element={<ForgotPass />} path="/Fpass/"></Route>
          <Route element={<LoginStudent />} path="/Slogin"></Route>
          <Route element={<LoginProctor />} path="/Plogin"></Route>
          <Route element={<LoginCompany />} path="/Clogin"></Route>
          <Route element={<LoginDean />} path="/Dlogin"></Route>
          <Route element={<DHeader />} path="/DHeader"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
