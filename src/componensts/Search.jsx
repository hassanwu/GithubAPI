import React from 'react'

function Search({setUsername}) {

    function searchUserName () 
    {
        let username = document.getElementById("input-username").value;

        setUsername(username);

    }

  return (
    <div className="input-group">
        <input type="text" placeholder="Add Username" id="input-username"/>  
        <button id="btn-search" onClick={()=>searchUserName()}>Search</button>
    </div>
  )
}

export default Search