import React from 'react'
import "./Dialog.css"
import Input from '../Input'

function FormDialog() {
  return (
    <form className="dialog-form">
        <div class="dialog-form__field">
            <Input label={"Name"}  placeholder="Enter book name"/>
        </div>
        <div class="dialog-form__field">
            <label for="author" class="dialog-form__field-label">Author</label>
            <input id="author" type="text" class="dialog-form__field-input" placeholder="Enter book author"/>
        </div>
        <div class="dialog-form__field">
        <label for="topic" class="dialog-form__field-label">Topic</label>
        <select id="topic" class="dialog-form__field-select">
            <option class="dialog-form__select-options" value="" selected disabled hidden>Choose topic here</option>
            <option class="dialog-form__select-options" value="programing">Programing</option>
            <option class="dialog-form__select-options" value="database">Database</option>
            <option class="dialog-form__select-options" value="network">Network</option>
            <option class="dialog-form__select-options" value="finance">Finance</option>
            <option class="dialog-form__select-options" value="devOps">DevOps</option>
        </select>
        </div>
    </form>
  )
}

export default FormDialog