import React from 'react'
import "./Form.css"

const Form = ({find, function1, form_function}) => {
  return (
    <div className='wrapper'>
      <form className="searcher" onSubmit={form_function}>
        <input type="text"
        placeholder="Search Food"
        value = {find}
        onChange= {function1} />

        <input type="submit"
        value="Search"
         />
      </form>
    </div>
  )
}

export default Form

