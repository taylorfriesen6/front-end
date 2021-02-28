import SignUpForm from './SignUpForm'
import React, {useState, useEffect} from "react";
import formSchema from './formSchema'
import * as yup from 'yup'
import {Link} from "react-router-dom";
import axios from 'axios'

const initialFormValues = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    title: '',
    category: '',
    source: '',
    ingredients: '',
    instructions: '',
  }
  const initialFormErrors = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    title: '',
    category: '',
    source: '',
    ingredients: '',
    instructions: '',
  }

export default function SignUp() {

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const formSubmit = () => {
        const signupSubmit = {
            username: formValues.username.trim(),
            firstname: formValues.firstname.trim(),
            lastname: formValues.lastname.trim(),
            email: formValues.email.trim(),
            password: formValues.firstname.trim(),
            title: formValues.title.trim(),
            category: formValues.category.trim(),
            source: formValues.source.trim(),
            ingredients: formValues.ingredients.trim(),
            instructions: formValues.instructions.trim(),
        }
        axios.post('', signupSubmit).then(res => {
          console.log(res)
        }).catch(e => console.log(e))
      }
    
    const inputChange = (name, value) => {
        yup.reach(formSchema, name)
          .validate(value)
          .then(() => {
            setFormErrors({...formErrors, [name]: ''})
          })
          .catch(err => {
            setFormErrors({...formErrors, [name]: err.errors[0]})
          })
        setFormValues({
          ...formValues,
          [name]: value 
        })
    }

    useEffect(() => {
        formSchema.isValid(formValues)
      }, [formValues])


return(
    <div className='signup'>
        <h1>.</h1>


        <SignUpForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
        />


        <div>
            <Link to="/">no sign up pls</Link>
        </div>

    </div>
    )
}