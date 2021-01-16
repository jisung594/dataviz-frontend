import React, { useState, useEffect } from 'react'

const Profile = () => {
  const [s3Files, setFiles] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/list_files')
      .then(res => res.json())
      .then(files => {
        setFiles(s3Files => files['files'])
      })
  },[])



  let s3_files = s3Files.map((file,i) => {
    return <h3 key={i}>{file}</h3>
  })


  return (
    <div>
      <h2> [username]'s profile page </h2>

      <div className='uploaded-files'>
        <h2>Uploaded Files:</h2>
        {s3_files}
      </div>

    </div>
  )
}

export default Profile;
