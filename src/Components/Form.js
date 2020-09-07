import React, { useState } from 'react';

const Form = (props) => {

  const [formInput, setInput] = useState({});


  let uploadToS3 = async () => {
    const response = await fetch('/upload')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }


  console.log(formInput);

  return (
    <div>
      <form id="upload-form" action="/" method="POST" encType="multipart/form-data">
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
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />

        <br/>

        <select
          name="format"
          form="dataFormat"
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
          required
        >
          <option value="" disabled selected>Format</option>
          <option value="csv">CSV</option>
          <option value="json">JSON</option>
          <option value="xlsx">XLSX</option>
        </select>

        <br/>

        <input id="submit" type="submit" placeholder="Submit"/>
      </form>
    </div>
  )
}

export default Form;
