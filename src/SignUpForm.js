import React from "react";

export default function SignUpForm(props) {
    const {
        values,
        submit,
        change,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
      }
    return(
    <form className='form container' onSubmit={onSubmit}>
      <div>
        <label>First Name
            <input
            value={values.firstname}
            onChange={onChange}
            name='firstname'
            type='text'
            />
        </label>

        <label>Last Name
            <input
            value={values.lastname}
            onChange={onChange}
            name='lastname'
            type='text'
            />
        </label>
        </div>
    </form>
    )
}