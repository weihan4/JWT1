import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import react, {useState, useEffect} from 'react';

const App = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const changeUsernameHandler = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const changePasswordHandler = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };
    

  return (
    <div className="App">
      <div>
        <input type='text' name='username' onChange={changeUsernameHandler} />
        <label>Username</label>
      </div>
      <div>
        <input type ='text' name='password' onChange={changePasswordHandler} />
        <label>Password</label>
      </div>
      <div>
        <button name='login' onClick={handleLogin} >
          Login
        </button>
      </div>
    </div>
  );
};

export default App;