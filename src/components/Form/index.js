import React, { useState } from 'react';
import { Container, FormLink } from './FormElements';

const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <FormLink to='/'>dolla</FormLink>
      <form onSubmit={handleSubmit}>
        <h2>Sign in to your account</h2>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' value={email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <button>Continue</button>
        <p>Forgot password</p>
      </form>
    </Container>
  );
};

export default SigninForm;
