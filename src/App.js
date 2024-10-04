import './App.css';
import React, { useState } from 'react';
import Gallery from './Components/Gallery';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Akshu' && password === '1322') {
      setIsLoggedIn(true); // Set login status to true if credentials are correct
      setError(''); // Clear any previous errors
    } else {
      setError('Wrong Password'); // Set error if login fails
    }
  };

  if (isLoggedIn) {
    return (
        <Gallery/>
     
    );
  }

  return (
    <>
    
    <div className='container mt-5'  >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User Name</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password"  value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}

      </form>
    </div>
    </>
    
  );
}

export default App;
