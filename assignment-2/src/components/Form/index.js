import { useState } from 'react'
import "./Form.css"

function Form({handleSubmitForm}) {
  const [formData, setFormData] = useState("")

  return (
    <form className="dialog-form" onSubmit={handleSubmitForm}>
        <div className="dialog-form__field">
            <label htmlFor="name" className="dialog-form__field-label">Name</label>
            <input
              id="name"
              type="text"
              className="dialog-form__field-input"
              placeholder="Enter book author" 
            
            />
        </div>
        <div className="dialog-form__field">
            <label htmlFor="author" className="dialog-form__field-label">Author</label>
            <input id="author" type="text" className="dialog-form__field-input" placeholder="Enter book author"/>
        </div>
        <div className="dialog-form__field">
        <label htmlFor="topic" className="dialog-form__field-label">Topic</label>
        <select id="topic" className="dialog-form__field-select">
            <option className="dialog-form__select-options" defaultValue="" selected disabled hidden>Choose topic here</option>
            <option className="dialog-form__select-options" defaultValue="programing">Programing</option>
            <option className="dialog-form__select-options" defaultValue="database">Database</option>
            <option className="dialog-form__select-options" defaultValue="network">Network</option>
            <option className="dialog-form__select-options" defaultValue="finance">Finance</option>
            <option className="dialog-form__select-options" defaultValue="devOps">DevOps</option>
        </select>
        </div>
    </form>
  )
}

export default Form