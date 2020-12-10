import React, { useState } from 'react'

const GraphForm = (props) => {
    const [formInput, setInput] = useState({});


    let read_csv = (e) => {
      e.preventDefault()

      let formData = new FormData();
      formData.append('x_axis', formInput['x_axis'])
      formData.append('y_axis', formInput['y_axis'])

      fetch('http://127.0.0.1:5000/read_csv', {
        method: 'POST',
        body: formData
      })
        .then(res => res.text())
        .then(body => {
          console.log(body)
        })
    }

  return (
    <div>
      <h2> CREATE GRAPH </h2>

      {/*
      <form onSubmit={(event)=>list_objs(event)}>
        <input type='submit' value='list files'/>
      </form>
      */}

      <form onSubmit={(event)=>read_csv(event)}>
        <input
          type='text'
          name='x_axis'
          placeholder='X-axis'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input
          type='text'
          name='y_axis'
          placeholder='Y-axis'
          onChange={e => setInput({...formInput, [e.target.name]: e.target.value})}
        />
        <input type='submit' value='read csv'/>
      </form>

    </div>
  )
}

export default GraphForm;
