import React, { useState } from 'react'

const UploadForm = () => {
  const [formInput, setInput] = useState({});

  const uploadToS3 = (obj,e) => {
    e.preventDefault()

    let formData = new FormData();
    formData.append("bucketDir", formInput["bucketDir"])
    formData.append("inputFile", formInput["inputFile"])
    formData.append("format", formInput["format"])

    fetch('http://127.0.0.1:5000/upload', {
      method: "POST",
      body: formData
    })
      .then(res => {
        if (res.status === 200) {
          alert("File successfully uploaded.")
        }
      })
      .catch(console.error)
  }


  return (
    <div className="form">
      <form
        id="upload-form"
        encType="multipart/form-data"
        onSubmit={(event) => uploadToS3(formInput,event)}
      >
        <input
          type="text"
          name="bucketDir"
          placeholder="Bucket Directory"
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
          required
        />

        <br/>

        <input
          type="file"
          name="inputFile"
          id="input-btn"
          onChange={e => setInput({...formInput, [e.target.name]: e.target.files[0]})}
          required
        />

        <br/>

        <select
          name="format"
          form="upload-form"
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
          defaultValue={'default'}
          required
        >
          <option value="default" disabled>Format</option>
          <option value="csv">CSV</option>
        </select>

        <br/>

        <input id="submit" type="submit" placeholder="Submit"/>
      </form>
    </div>
  )
}

export default UploadForm;
