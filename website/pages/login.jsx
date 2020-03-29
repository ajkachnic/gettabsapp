import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';

import { Text, TextInput, Button, Spacer } from '../components'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <div style={{
      height: "100%",
      width: "100%",
      padding: "3rem",
    }}>
      <Head>
        <title>Sign in</title>
      </Head>
      <Text type="h2">Sign in</Text>
      <form action="/api/authenticate" method="post">
        {router && router.query && router.query.fail ? <Text type="p" color="red" size="1rem">Incorrect email or password</Text>: null}
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
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  )
}

export default Login;