import './App.css';
import Login from './Components/Login';
// import{Routes ,Route} from 'react-router-dom/cjs/react-router-dom'
import TaskList from './Task/TaskList';
import Registration from './Components/Registration'
import { useState } from 'react';


function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const registerUser = (username, password) => {
    const userExists = users.some(user => user.username === username);
    if (userExists) {
      alert("Username already exists!");
    } else {
      setUsers([...users, { username, password }]);
      alert("Registration successful!");
    }
  };

  const loginUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
    } else {
      alert("Invalid username or password");
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };
  return (
    <div className='form'>

      {/* <Routes>
          <Route path={'/login'} exact Components={Login}> </Route>
          <Route path={'/Registration'} exact Components={Login}> </Route>
      </Routes>
     
          <Login/> */}



      {!currentUser ? (
        <>
        
          <Registration registerUser={registerUser} />
          <Login loginUser={loginUser} />
        </>
      ) : (
        <TaskList currentUser={currentUser} logoutUser={logoutUser} />
      )}
      
     
     
    </div>
  );
}

export default App;
