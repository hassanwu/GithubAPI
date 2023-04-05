import './App.css';
import Search from './componensts/Search';
import DisplayProfiles from './componensts/DisplayProfiles';
import { useState, useEffect } from 'react';
import _ from 'lodash';

function App() {

  const[users, setUsers] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (username) {
      // const searchUser = _.debounce(() => {
        fetch(`https://api.github.com/search/users?q=${username}`)
          .then(response => response.json())
          .then(data => setUsers(data.items))
          .catch(error => console.error(error));
      // }, 500); 

      // searchUser();
      console.log("users : " + users[0]);

    }
  }, [username]);

  return (
    <section>
      <div className='subsection'>
        <h2>GITHIB SEARCH PROFILE</h2>
        <Search setUsername={setUsername}/>
        {console.log("App : " + username)}
        {console.log("App : " + users)}
        <DisplayProfiles users={users} username={username}/>
      </div>
    </section>
  );
}

export default App;
