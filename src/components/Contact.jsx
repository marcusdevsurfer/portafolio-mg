import React, { useState } from 'react'

export const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmitFormClick = (e) => {
    e.preventDefault()
    alert("I'm working on this function. It will be available soon be patient.")
    setName('')
    setEmail('')
    setMessage('')

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
            <input value={name} id='name' name='name' className='form-control' type="text" onChange={e => setName(e.target.value)} />
          </div>

          <div className='mb-2'>
            <label htmlFor="mail" className='form-label'>Email</label>
            <input value={email} id='mail' name='mail' className='form-control' type="text" onChange={e => setEmail(e.target.value)} />
          </div>

          <div className='mb-2'>
            <textarea value={message} className='form-control' placeholder='Message' name="message" id="message" cols="30" rows="10" onChange={e => setMessage(e.target.value)}></textarea>
          </div>

          <div className='text-center my-3'>
            <input className='btn bg-white text-black' type="submit" value={'Enviar'} />
          </div>
        </form>
      </div>
    </div>
  )
}
