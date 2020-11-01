import React, { useState } from 'react';

const Form = (props) => {

  const [formInput, setInput] = useState({});

  const uploadToS3 = (obj,e) => {
    e.preventDefault()

    let formData = new FormData();
    formData.append("bucketDir", formInput["bucketDir"])
    formData.append("inputFile", formInput["inputFile"])
    formData.append("format", formInput["format"])

    fetch('http://127.0.0.1:5000/upload', {
      method: "POST",
      // headers: { 'Content-Type': 'multipart/form-data' },
      // body: obj
      body: formData
    })
      .then(res => {
        console.log(res.status)
      })
      .catch(console.error)
  }


  // package.json =>
  // (scripts) "start-api": "venv/bin/python -m flask run --no-debugger",

  // "proxy": "http://127.0.0.1:5000/",
  // "secure": false


  return (
    <div>
      <form
        id="upload-form"
        encType="multipart/form-data"
        onSubmit={(event) => uploadToS3(formInput,event)}
      >
      {/* onSubmit={(event) => uploadToS3(formInput,event)} */}
      {/* action="http://localhost:5000/upload" */}
      {/* action="http://127.0.0.1:5000/upload" */}
      {/* encType="multipart/form-data" */}
      {/* encType="application/x-www-form-urlencoded" */}

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

export default Form;
