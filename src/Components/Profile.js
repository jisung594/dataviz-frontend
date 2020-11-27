import React from 'react'

const Profile = () => {

  let list_objs = (event) => {
    event.preventDefault()

    fetch('http://127.0.0.1:5000/list_objs')
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }


  return (
    <div>
      <h2> [username]'s profile page </h2>

      <form onSubmit={(event)=>list_objs(event)}>
        <input type='submit' />
      </form>
    </div>
  )
}

export default Profile;
