import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useUser } from '../lib/hooks';
import { Container, FormControl, FormGroup, FormHelperText, FormLabel, TextField, Button, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import Link from 'next/link';

const SignupPage = () => {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.name.value,
      password: e.currentTarget.password.value,
    };
    console.log("Making API request")
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    console.log("API request complete")
    if (res.status === 201) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  };

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <Container maxWidth="sm" style={{textAlign:"center"}}>
          <h2>Sign in</h2>
          <Paper elevation={20}>
            <form onSubmit={handleSubmit} style={{padding:"9%"}}>
              {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null }
                <Grid container spacing={1}  direction="row" justify="flex-start" alignItems="flex-start" alignContent="stretch">
                  <Grid item xs={12} sm={6}>
                    <FormGroup style={{paddingBottom:"5%"}}>
                      <TextField fullWidth id="name" name="name" label="Your name" variant="outlined" color="primary"></TextField>
                    </FormGroup>
                    <FormGroup style={{paddingBottom:"5%"}}>
                      <TextField fullWidth id="email" type="email" name="email" label="Email" variant="outlined" color="primary"></TextField>
                    </FormGroup>
                    <FormGroup style={{paddingBottom:"5%"}}>
                      <TextField fullWidth id="password" type="password" name="password" label="Password" variant="outlined" color="primary"></TextField>
                    </FormGroup>
                  </Grid >
                  <Grid item xs={12} sm={6}>
                    <div style={{textAlign:"center",marginTop:"25%"}}>
                      <Button variant="contained" color="secondary" type="submit">Sign In</Button>
                      <br/>
                      <br/>
                      <Link href="/forgetpassword">
                        <a> <u>Forget password</u></a>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
            </form>
          </Paper>
      </Container>
    </>
  );
};

export default SignupPage;
