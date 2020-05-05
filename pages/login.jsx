import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '../lib/hooks';
import Paper from '@material-ui/core/Paper'
import { Container, FormControl, FormGroup, FormHelperText, FormLabel, TextField, Button, Grid } from '@material-ui/core';

const LoginPage = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [user, { mutate }] = useUser();
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.push('/profile');
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try again!');
    }
  }

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      
      
      <Container maxWidth="sm" style={{textAlign:"center"}}>
          <h2>Sign in</h2>
          <Paper elevation={20}>
            <form onSubmit={onSubmit} style={{padding:"9%"}}>
              {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
                <Grid container spacing={1}  direction="row" justify="flex-start" alignItems="flex-start" alignContent="stretch">
                  <Grid item xs={12} sm={6}>
                    <FormGroup style={{paddingBottom:"5%"}}>
                      <TextField fullWidth id="email" type="email" name="email" label="Email" variant="outlined" color="primary"></TextField>
                    </FormGroup>
                    <FormGroup style={{paddingBottom:"5%"}}>
                      <TextField fullWidth id="password" type="password" name="password" label="Password" variant="outlined" color="primary"></TextField>
                    </FormGroup>
                  </Grid >
                  <Grid item xs={12} sm={6}>
                    <div style={{textAlign:"center",marginTop:"10%"}}>
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

export default LoginPage;
