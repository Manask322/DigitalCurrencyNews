import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useUser } from '../lib/hooks';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp';


export default ({ children }) => {
  const [user, { mutate }] = useUser();
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null);
  };
  const months = ['Jan','Feb','March','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
  const weekdays = ['Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday']
  const today_date = new Date()
  const day = weekdays[today_date.getDay()]
  const date = today_date.getDate()
  const month = months[today_date.getMonth() - 1]
  const year = today_date.getFullYear() 
  return (
    <>
      <Head>
        <title>DCN</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="World class news platform for Crypto News"
        />
        <meta property="og:title" content="Digital Currency News" />
        <meta
          property="og:description"
          content="World class news platform for Crypto News"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Manask322/dcn/master/Free_Sample_By_Wix.jpg?token=AHW2P5Y546TH4ITK2YGYDJK6WRJAE"
        />
      </Head>
      <header>
        <Container maxWidth="md">
          <Grid
            container
            spacing={1}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            alignContent="stretch"
          >
            <Grid item xs={9} sm={9} >
                  <div style={{fontSize:  "350%"}}>
                      <Link href="/">
                        <a style={{color:"black",letterSpacing:"-1.7px",fontWeight:"550"}}>
                          Digital Currency News
                        </a>
                      </Link>
                  </div>
            </Grid>
            
            <Grid item xs={3} sm={3} style={{textAlign:"right"}}>
                <div className="date" >
                  {day}, {date} {month} {year}
                </div>
                <div className="social-links">
                  <Link href="#">
                    <FacebookIcon/>
                  </Link>
                  <Link href="#">
                    <TwitterIcon/>
                  </Link>
                  <Link href="#">
                  <MonetizationOnIcon/>
                  </Link>
                </div>
                <div className="auth-nav-links">
                  {!user ? (
                    <Grid container justify="flex-end">
                      <Typography>
                        <Link href="/login">
                          <a>Sign in  </a>
                        </Link>
                        |
                        <Link href="/signup">
                          <a> Sign up</a>
                        </Link>
                      </Typography >
                    </Grid>
                  ) : (
                    <Grid container justify="flex-end">
                      <Typography >
                        <Link href="/article/add">
                          <a>Add Article </a>
                        </Link>
                        |
                        <Link href="/profile">
                          <a> Profile  </a>
                        </Link>
                        | 
                        <a tabIndex={0} role="button" onClick={handleLogout}> Logout </a>
                      </Typography >
                    </Grid>
                  )}
                </div>  
            </Grid>
          </Grid>
          <Grid 
            container
            direction="row" 
            justify="center" 
            alignItems="center"
            >
              <Grid item sm={1} xs={3}>
                <Link href="/">
                  <a style={{color:"rgb(70, 69, 69)",fontWeight:"500"}}>Home</a> 
                </Link> 
              </Grid>
              <Grid item sm={1} xs={3}> 
                <Link href="#"><a style={{color:"rgb(70, 69, 69)",fontWeight:"500"}}>World</a></Link> 
              </Grid>
              <Grid item sm={1} xs={3}> 
                <Link href="#"><a style={{color:"rgb(70, 69, 69)",fontWeight:"500"}}>Finance</a></Link> 
              </Grid>
              <Grid item sm={1} xs={3}> 
                <Link href="#"><a style={{color:"rgb(70, 69, 69)",fontWeight:"500"}}>Blogs</a></Link> 
              </Grid>
          </Grid>
        </Container>      
      </header>
      <section >
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="stretch"
              style={{marginTop:"0.5%",borderTop: "1px solid grey",borderBottom: "1px solid grey"}}          
            >
              <Grid item sm={2} xs={2} className="rate-grid">
                <Link href="#"> 
                  <a className="rate-link">
                    Bitcoin <b>$7,500.99</b>   <span style={{color:"green"}}>0.15% <ArrowDownwardSharpIcon fontSize="small" style={{marginBottom:"-1.8%"}} /></span> 
                  </a> 
                </Link>
              </Grid>
              <Grid item sm={2} xs={2} className="rate-grid">
                <Link href="#"> 
                  <a className="rate-link">
                    Bitcoin <b>$7,500.99</b>   <span style={{color:"green"}}>0.15% <ArrowDownwardSharpIcon fontSize="small" style={{marginBottom:"-1.8%"}} /></span> 
                  </a> 
                </Link>
              </Grid>
              <Grid item sm={2} xs={2} className="rate-grid">
                <Link href="#"> 
                  <a className="rate-link" style={{color:"blue"}}>
                    XRP <b>$0.2</b>   <span style={{color:"red"}}>0.14% <ArrowDownwardSharpIcon fontSize="small" style={{marginBottom:"-1.8%"}} /></span> 
                  </a> 
                </Link>
              </Grid>
              <Grid item sm={2} xs={2} className="rate-grid">
                <Link href="#"> 
                  <a className="rate-link">
                    Bitcoin <b>$7,500.99</b>   <span style={{color:"green"}}>0.15% <ArrowDownwardSharpIcon fontSize="small" style={{marginBottom:"-1.8%"}} /></span> 
                  </a> 
                </Link>
              </Grid>
              <Grid item sm={2} xs={2} className="rate-grid">
                <Link href="#"> 
                  <a className="rate-link" style={{color:"blue"}}>
                    XRP <b>$0.2</b>   <span style={{color:"red"}}>0.14% <ArrowDownwardSharpIcon fontSize="small" style={{marginBottom:"-1.8%"}} /></span> 
                  </a> 
                </Link>
              </Grid>
              <Grid item sm={2} xs={2} className="rate-grid">
                <Link href="#"> 
                  <a className="rate-link">
                    XRP <b>$0.2</b>   <span style={{color:"red"}}>0.14% <ArrowDownwardSharpIcon fontSize="small" style={{marginBottom:"-1.8%"}} /></span> 
                  </a> 
                </Link>
              </Grid>
            </Grid>
      </section>
      <main style={{paddingTop:"3%"}}>
        {children}
        </main>
      {/* <footer>
        <p>
          Made with
          {' '}
          <span role="img" aria-label="Love">
            ❤️
          </span>
          ,
          {' '}
          <span role="img" aria-label="Fire">
            🔥
          </span>
          , and a keyboard by
          {' '}
          <a href="https://www.hoangvvo.com/">Hoang Vo</a>
.
        </p>
        <p>
          Source code is on
          {' '}
          <a href="https://github.com/hoangvvo/nextjs-mongodb-app">Github</a>
.
        </p>
      </footer> */}
    </>
  );
};
