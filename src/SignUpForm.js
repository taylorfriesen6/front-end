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
        const { name } = evt.target
        change(name)
      }
    return(
    <form className='form container' onSubmit={onSubmit}>
      <div>

        <label>Username
            <input
            value={values.username}
            onChange={onChange}
            name='username'
            type='text'
            />
        </label>

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

        <label>Email
            <input
            value={values.email}
            onChange={onChange}
            name='firstname'
            type='text'
            />
        </label>

        <label>Password
            <input
            value={values.password}
            onChange={onChange}
            name='firstname'
            type='text'
            />
        </label>

        

        

        

        </div>
    </form>
    )
}