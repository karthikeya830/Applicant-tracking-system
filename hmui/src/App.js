import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Nav from './Components/Nav';
import DashBoard from './Pages/DashBoard';
import Jobs from './Pages/Jobs';
import MailBox from './Pages/MailBox';
import Reports from './Pages/Reports';
import AddJob from './Pages/AddJob';
import Login from './Pages/Login';
import JobDetails from './Pages/JobDetails';
import Team from './Pages/Team';
import AddTeamMember from './Pages/AddTeamMember';
import Register from "./Pages/Register";
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { useEffect, useState } from 'react';
import ApplicantForm from './Pages/ApplicantForm';
//hello this is kiran working from home
function App() {
  const [userIn, setUser] = useState(null)

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      const userId = userInfo._id;
      axios.get(`http://localhost:5000/api/users/${userId}`)
        .then((response) => {
          console.log(response.data);
          setUser(response.data)
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  return (
    <div className="App">
      {userIn && <Nav data={userIn} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {userIn && <Route path='/profile' element={<Profile user ={userIn} />} /> }
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/mailbox' element={<MailBox />} />
        <Route path='/team' element={<Team />} />
        <Route path='/team/add' element={<AddTeamMember />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/jobs/addJob' element={<AddJob />} />
        <Route path='/jobs/:id' element={<JobDetails />} />
        <Route path='/candidateForm/:id' element={ <ApplicantForm /> } />
      </Routes>
    </div>
  );
}

export default App;
