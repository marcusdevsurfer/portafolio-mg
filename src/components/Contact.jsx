import React, { useState } from 'react'

import emailjs from '@emailjs/browser';

export const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [errorInputName, setErrorInputName] = useState()
  const [errorInputEmail, setErrorInputEmail] = useState()
  const [errorInputEmailNotValid, setErrorInputEmailNotValid] = useState()
  const [errorInputMessage, setErrorInputMessage] = useState()


  const [showLoader, setShowLoader] = useState(false)



  const sendEmail = async () => {

    const templateParams = {
      from_name: name,
      to_name: 'Marcus Gonzalez',
      from_email: email,
      message: message,
    };

    const response = await emailjs.send('service_2afgbfq', 'template_umt9utk', templateParams, 'xJ9SQcTB9IFvgdSEd')

    return response
  }

  const validateForm = () => {
    if (name.length < 10) {
      setErrorInputName(true)
    } else {
      setErrorInputName(false)
    }

    if (email.length < 10) {
      setErrorInputEmail(true)
    } else {
      setErrorInputEmail(false)

    }

    if (!email.includes('@')) {
      setErrorInputEmailNotValid(true)
    } else {
      setErrorInputEmailNotValid(false)
    }

    if (message.length < 15) {
      setErrorInputMessage(true)
    } else {
      setErrorInputMessage(false)
    }

  }

  const handleSubmitFormClick = (e) => {

    e.preventDefault()

    if (name.length < 10) {
      setErrorInputName(true)
    } else {
      setErrorInputName(false)
    }

    if (email.length < 10) {
      setErrorInputEmail(true)
    } else {
      setErrorInputEmail(false)
    }

    if (!email.includes('@')) {
      setErrorInputEmailNotValid(true)
    } else {
      setErrorInputEmailNotValid(false)
    }

    if (message.length < 15) {
      setErrorInputMessage(true)
    } else {
      setErrorInputMessage(false)
    }

    if (errorInputName == false && errorInputEmail == false && errorInputEmailNotValid == false && errorInputMessage == false) {
      sendEmail().then((response) => {
        console.log(response.status, response.text)
      })
    }






  }

  return (
    <div className='mb-3 d-flex bg-black text-white flex-column align-items-center container rounded-4'>

      <div className='my-3'>
        <h3>Get In Touch</h3>
      </div>

      <div>
        <form onSubmit={handleSubmitFormClick}>

          <div className='mb-2'>
            <label htmlFor="name" className='form-label'>Name</label>
            <input required value={name} id='name' name='name' className='form-control' type="text" onChange={e => setName(e.target.value)} />
            {errorInputName ? <p class="alert alert-warning p-1" role="alert">
            El campo tiene que ser mayor a 10 caracteres.
            </p> : null}
            
          </div>

          <div className='mb-2'>
            <label htmlFor="mail" className='form-label'>Email</label>
            <input required value={email} id='mail' name='mail' className='form-control' type="mail" onChange={e => setEmail(e.target.value)} />
            {errorInputEmail ? <p class="alert alert-warning p-1" role="alert">
            El campo tiene que ser mayor a 10 caracteres.
            </p> : null}
            {errorInputEmailNotValid ? <p class="alert alert-warning p-1" role="alert">
            El email no es valido.
            </p> : null}

          </div>

          <div className='mb-2'>
            <textarea required value={message} className='form-control' placeholder='Message' name="message" id="message" cols="30" rows="10" onChange={e => setMessage(e.target.value)}></textarea>
            {errorInputMessage ? <p class="alert alert-warning p-1" role="alert">
            El campo tiene que ser mayor a 15 caracteres.
            </p> : null}
          </div>

          <div className='text-center my-3'>

            {showLoader == false
              ? <input className='btn bg-white text-black' type="submit" value={'Enviar'} />
              : <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            }

          </div>
        </form>
      </div>
    </div>
  )
}
