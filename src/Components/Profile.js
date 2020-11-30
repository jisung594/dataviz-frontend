import React, { useState } from 'react'

const Profile = () => {
  const [s3Files, setFiles] = useState([]);

  let list_objs = (e) => {
    e.preventDefault()

    fetch('http://127.0.0.1:5000/list_files')
      .then(res => res.json())
      .then(files => {
        setFiles(s3Files => files['files'])
      })
  }

  let s3_files = s3Files.map((file,i) => {
    return <h3 key={i}>{file}</h3>
  })

  // console.log(s3Files);

  return (
    <div>
      <h2> [username]'s profile page </h2>

      <form onSubmit={(event)=>list_objs(event)}>
        <input type='submit' value='list files'/>
      </form>

      <div className='uploaded-files'>
        {s3_files}
      </div>

    </div>
  )
}

export default Profile;
