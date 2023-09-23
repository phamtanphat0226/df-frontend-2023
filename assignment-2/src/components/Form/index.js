import { useState, useEffect } from 'react'
import "./Form.css"

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    topic: ""
  });
  const [isDataChanged, setIsDataChanged] = useState(false);

  const onChange = (e) => {
    const value = e.target.value
    const id = e.target.id
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
    setIsDataChanged(true);
  }
  
  useEffect(() => {
    if (isDataChanged) {
      const formDataEvent = new CustomEvent('formDataChanged', { detail: formData });
      window.dispatchEvent(formDataEvent);
    }
  }, [formData, isDataChanged]);

  return (
    <>
      <form  className="dialog-form">
        <div className="dialog-form__field">
            <label htmlFor="name" className="dialog-form__field-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="dialog-form__field-input"
            placeholder="Enter book author" 
            onChange={onChange}
            />
        </div>
        <div className="dialog-form__field">
            <label htmlFor="author" className="dialog-form__field-label">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            className="dialog-form__field-input"
            placeholder="Enter book author"
            onChange={onChange}
          />
        </div>
        <div className="dialog-form__field">
        <label htmlFor="topic" className="dialog-form__field-label">Topic</label>
        <select id="topic" name="topic" className="dialog-form__field-select"  onChange={onChange}>
            <option className="dialog-form__select-options" defaultValue="" selected disabled hidden>Choose topic here</option>
            <option className="dialog-form__select-options" defaultValue="programing">Programing</option>
            <option className="dialog-form__select-options" defaultValue="database">Database</option>
            <option className="dialog-form__select-options" defaultValue="network">Network</option>
            <option className="dialog-form__select-options" defaultValue="finance">Finance</option>
            <option className="dialog-form__select-options" defaultValue="devOps">DevOps</option>
        </select>
        </div>
    </form>
    </>
  )
}

export default Form