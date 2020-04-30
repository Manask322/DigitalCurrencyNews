import React from 'react';
import { useUser } from '../lib/hooks';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import fetch from 'isomorphic-unfetch'

const IndexPage = (props) => {
  const [user] = useUser();

  return (
    <>
    {/* {user ? user.name : 'stranger'} */}
    <Container maxWidth="xl">
      <br/>
      <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start" alignContent="stretch" style={{borderTop:"0.1px solid rgb(158, 157, 157)"}}>        
        {/* Column1 */}
        <Grid item sm={3} xs={12} >
          <Grid container direction="row" justify="flex-start" alignItems="center" style={{borderRight:"0.1px solid rgb(150, 150, 150)"}}>
            <Grid item xs={12} sm={12} style={{marginRight:"3%", borderBottom:"0.1px solid rgb(150, 150, 150)"}}>
              <h1><a href="#" className="news-heading">Bitcoin Prices Dropped</a></h1>
              <p>The top cryptocurrency by market value rose to as $7,800 early on
                Monday to hit its highest level since March 
                12 – dubbed "Black Thursday" – when prices fell from $7,950 to 
                $4,700 as the coronavirus pandemic crashed most markets.</p>
            </Grid>
            <Grid item xs={12} sm={12} style={{marginRight:"3%", borderBottom:"0.1px solid rgb(150, 150, 150)"}}>
              <h1><a href="#" className="news-heading">Bitcoin Prices Dropped</a></h1>
              <p>The top cryptocurrency by market value rose to $7,800 early on
                 Monday to hit its highest level since March 
                12 – dubbed "Black Thursday" – when prices fell from $7,950 to 
                $4,700 as the coronavirus pandemic crashed most markets.</p>
            </Grid>
            <Grid item xs={12} sm={12} style={{marginRight:"3%", borderBottom:"0.1px solid rgb(150, 150, 150)"}}>
              <h1><a href="#" className="news-heading">Bitcoin Prices Dropped</a></h1>
              <p>The top cryptocurrency by market value rose to $7,800 early on
                 Monday to hit its highest level since March 
                12 – dubbed "Black Thursday" – when prices fell from $7,950 to 
                $4,700 as the coronavirus pandemic crashed most markets.</p>
            </Grid>
          </Grid>
        </Grid>

        {/* Column 2 */}
        <Grid item sm={4} xs={12} style={{borderRight:"0.1px solid rgb(150, 150, 150)"}}>
          <Grid container item direction="row" justify="flex-start" alignItems="center">
              {
                props.articles.map( article => (
                  <Grid item xs={12} sm={12} key={article._id} style={{marginRight:"1%", borderBottom:"0.1px solid rgb(150, 150, 150)"}}>
                    { article.image ? 
                      <img src={article.image} alt="image" height="70%" width="100%"/> : 
                      <></>
                    }
                  <h1><a href="#" className="news-heading">{article.heading}</a></h1>
                  <small style={{float:"right",display:"block"}}> <b>{article.author}</b></small>
                  <br/>
                  <p>{article.subheading}</p>
                </Grid>
                ))
              }
          </Grid>
        </Grid>

        {/* Column 3 */}
        <Grid item sm={2} xs={12} style={{borderRight:"0.1px solid rgb(150, 150, 150)"}}>
          <Grid container item direction="row" justify="flex-start" alignItems="center">
              <Grid item xs={12} sm={12} style={{marginRight:"1%", borderBottom:"0.1px solid rgb(150, 150, 150)"}}>
                <h1>Bitcoin Prices Dropped</h1>
                <p>The top cryptocurrency by market value rose to $7,800 early on
                  Monday to hit its highest level since March 
                  12 – dubbed "Black Thursday" – when prices fell from $7,950 to 
                  $4,700 as the coronavirus pandemic crashed most markets.</p>
              </Grid>
              <Grid item xs={12} sm={12} style={{marginRight:"1%", borderBottom:"0.1px solid rgb(150, 150, 150)"}}>
                <img src="https://si.wsj.net/public/resources/images/B3-GO970_wsjmon_D_20200427093943.jpg" alt="" width="100%" />
                <h1>Bitcoin Prices Dropped</h1>
                <p>The top cryptocurrency by market value rose to $7,800 early on
                  Monday to hit its highest level since March 
                  12 – dubbed "Black Thursday" – when prices fell from $7,950 to 
                  $4,700 as the coronavirus pandemic crashed most markets.</p>
              </Grid>
              <Grid item xs={12} sm={12} style={{marginRight:"1%", borderBottom:"0.1px solid rgb(150, 150, 150)"}}>
                <h1>Bitcoin Prices Dropped</h1>
                <p>The top cryptocurrency by market value rose to $7,800 early on
                  Monday to hit its highest level since March 
                  12 – dubbed "Black Thursday" – when prices fell from $7,950 to 
                  $4,700 as the coronavirus pandemic crashed most markets.</p>
              </Grid>
          </Grid>
        </Grid>

        {/* Column 4 */}
        <Grid item sm={3} xs={12}>
          <Grid container item direction="row" justify="flex-start" alignItems="center">
              <Grid item xs={12} sm={12}>
                <h1>Bitcoin Prices Dropped</h1>
                <p>The top cryptocurrency by market value rose to $7,800 early on
                  Monday to hit its highest level since March 
                  12 – dubbed "Black Thursday" – when prices fell from $7,950 to 
                  $4,700 as the coronavirus pandemic crashed most markets.</p>
              </Grid>
              <Grid item xs={12} sm={12}>
                <h1>Bitcoin Prices Dropped</h1>
                <p>The top cryptocurrency by market value rose to $7,800 early on
                  Monday to hit its highest level since March 
                  12 – dubbed "Black Thursday" – when prices fell from $7,950 to 
                  $4,700 as the coronavirus pandemic crashed most markets.</p>
              </Grid>
              <Grid item xs={12} sm={12}>
                <h1>Bitcoin Prices Dropped</h1>
                <p>The top cryptocurrency by market value rose to $7,800 early on
                  Monday to hit its highest level since March 
                  12 – dubbed "Black Thursday" – when prices fell from $7,950 to 
                  $4,700 as the coronavirus pandemic crashed most markets.</p>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    </Container>
    </>
  );
};

IndexPage.getInitialProps = async () => {
  const res = await fetch( process.env.WEB_URI + '/api/article')
  const json = await res.json()
  return { articles: json }
}


export default IndexPage;
