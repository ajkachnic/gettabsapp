import React, { useState, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fetch from '../lib/fetch';
import redirect from '../lib/redirect'
import { Text, TextInput, Button, Spacer, UserContext } from '../components'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(UserContext);

  const [ name, setName ] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let handleSubmit = (event) => {
    if (isLoading) return

    event.preventDefault()
    setIsLoading(true);

    fetch.post('/api/users', {
      name,
      email,
      password
    })
    .then(res => {
      setIsLoading(false);
      if(res.ok !== false) {
        dispatch({ type: 'fetch' })
        redirect('/')
      } 
    })
  }
  return (
    <div style={{
      height: "100%",
      width: "100%",
      padding: "3rem",
    }}>
      <Head>
        <title>Register</title>
      </Head>
      <Text type="h2">Register</Text>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <TextInput
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          </label>
          <Spacer />
        <label htmlFor="email">
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          </label>
          <Spacer />
          <label htmlFor="password">
          <TextInput
           id="password"
           type="password"
           name="password"
           placeholder="Password"
           value={password}
           onChange={e => setPassword(e.target.value)}
          />
        </label>
        <Spacer margin="2em 0"/>
        <Button type="submit">Register</Button>
      </form>
    </div>
  )
}

export default Login;