import React from 'react'

function DisplayProfiles({users, username}) {

    const style = {
        width : "100px",

    }
  return (

    // <div key={users.id}>
    //       <h2>{users.login}</h2>
    //       <img style={style} src={users.avatar_url} alt={users.name} />
    //       <p>{users.url}</p>
    // </div>

    <div>
        {users.length > 1 && users.map(user => (
        <div className='profile' key={user.id}>
          
          <img style={style} src={user.avatar_url} alt={user.name} />
          <a href={user.html_url}>{user.login}</a>
        </div>
      ))}
    </div>
  )
}

export default DisplayProfiles