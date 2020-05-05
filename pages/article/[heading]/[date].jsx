import React from 'react';
import {useRouter} from 'next/router'
// import { useUser } from '../lib/hooks';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import fetch from 'isomorphic-unfetch'
import Paper from '@material-ui/core/Paper';


const FirstLayout = (props) => {
  
  const article = props.article;
  return (<>

    <Container maxWidth="xl">
      <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start" alignContent="stretch" >        
        {/* Main Article */}
        <Grid item sm={9} xs={12} style={{borderRight:"0.1px solid rgb(150, 150, 150)"}}>
          <Container maxWidth="lg">
            <div className="article-header">
                  <div className="article-heading">
                    <h1>
                      <small style={{fontSize:"x-large"}}>
                         <span style={{textAlign:"left",color:"red",textTransform:"capitalize"}}>
                          {article.news_type} 
                        </span>
                      </small>
                      <br/>
                      {article.heading}
                      </h1>
                  </div>
            </div>
            <div className="article-subheading">
                <p style={{ fontSize:"x-large" }}>  
                  {article.subheading}
                    <small style={{fontSize:"medium"}}>
                        <span style={{float:"right",color:"black"}}>
                        {article.date} 
                      </span>
                    </small>
                    <br/>
                </p>
            </div>
            <div className="main-content">
              <img src={article.image} alt="image"  style={{display:"inline-block",marginLeft:"20%"}} width="60%" height="60%"/>
              <p style={{color:"black",fontSize:"x-large"}}>
                {article.content}
                <br/>
                {article.content_1}
                <br/>
                {article.content_2}
              </p>
            
            </div>
          </Container>
        </Grid>
        
        {/* Side Bar */}
        <Grid item sm={3} xs={12}>
          <div style={{width:"100%",height:"100%"}}>
            <Paper square elevation={24} variant="outlined" style={{width:"100%",height:"100%"}}>
              <div  style={{margin:"50%"}}>
                This will have the current Market prices
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>

  </>)
}

const SecondLayout = (props) => {

  const article = props.article;
  const initial_content = article.content.slice(0,article.content.length/2)
  const after_content  = article.content.slice(article.content.length/2,article.content.length)

  return (<>

    <Container maxWidth="xl">
      <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start" alignContent="stretch" style={{borderTop:"0.1px solid rgb(158, 157, 157)"}}>        

        <Grid item sm={9} xs={12} style={{borderRight:"0.1px solid rgb(150, 150, 150)"}}>
          <Container maxWidth="lg">
            <div className="article-header">
                  <div className="article-heading">
                    <h1>
                      <small style={{fontSize:"x-large"}}>
                         <span style={{textAlign:"left",color:"red",textTransform:"capitalize"}}>
                          {article.news_type} 
                        </span>
                      </small>
                      <br/>
                      {article.heading}
                      </h1>
                  </div>
            </div>
            <div className="article-subheading">
                <p style={{ fontSize:"x-large" }}>  
                  {article.subheading}
                    <small style={{fontSize:"medium"}}>
                        <span style={{float:"right",color:"black"}}>
                        {article.date} 
                      </span>
                    </small>
                    <br/>
                </p>
            </div>
            <div className="main-content">
              <p style={{color:"black",fontSize:"x-large"}}>
                {article.content}
                <br/>
              <img src={article.image} alt="image"  style={{display:"inline-block",marginLeft:"20%"}} width="60%" height="60%"/>
                {article.content_1} 
                <br/>
                {article.content_2}
              </p>
            
            </div>
          </Container>
        </Grid>

        <Grid item sm={3} xs={12}>
          <div style={{width:"100%",height:"100%"}}>
            <Paper square elevation={24} variant="outlined" style={{width:"100%",height:"100%"}}>
              <div  style={{margin:"50%"}}>
                This will have the current Market prices
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>

  </>)
}

const ThirdLayout = (props) => {

  const article = props.article;
  const initial_content = article.content.slice(0,article.content.length/2)
  const after_content  = article.content.slice(article.content.length/2,article.content.length)

  return (<>

    <Container maxWidth="xl">
      <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start" alignContent="stretch" style={{borderTop:"0.1px solid rgb(158, 157, 157)"}}>        

        <Grid item sm={9} xs={12} style={{borderRight:"0.1px solid rgb(150, 150, 150)"}}>
        <Container maxWidth="lg">
            <div className="article-header">
                  <div className="article-heading">
                    <h1>
                      <small style={{fontSize:"x-large"}}>
                         <span style={{textAlign:"left",color:"red",textTransform:"capitalize"}}>
                          {article.news_type} 
                        </span>
                      </small>
                      <br/>
                      {article.heading}
                      </h1>
                  </div>
            </div>
            <div className="article-subheading">
                      <span style={{float:"right",color:"black"}}>
                        {article.date} 
                      </span>
                <Grid container spacing={1} direction="row" justify="flex-start" alignItems="stretch" alignContent="stretch">
                    <Grid item xs={5} md={5} sm={5}>
                      <img src={article.image} alt="image" width="90%" height="90%"/>
                    </Grid>
                    <Grid item xs={7} md={7} sm={7} >
                      <p style={{ fontSize:"x-large" }}>  
                        {article.subheading}
                      </p>
                    </Grid>
                </Grid>
            </div>
            <div className="main-content">
              <p style={{color:"black",fontSize:"x-large"}}>
                {article.content}
                <br/>
                {article.content_1} 
                <br/>
                {article.content_2}
              </p>
            
            </div>
          </Container>
        </Grid>
        <Grid item sm={3} xs={12}>
          <div style={{width:"100%",height:"100%"}}>
            <Paper square elevation={24} variant="outlined" style={{width:"100%",height:"100%"}}>
              <div  style={{margin:"50%"}}>
                This will have the current Market prices
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>

  </>)
}

const Article = (props) => {
  const layout_index = Math.floor(Math.random() * 3 ) + 1;
  if(layout_index == 1){
    return(
            <FirstLayout  
              article={props.article}
            />
    )
  }
  else if(layout_index == 2){
    return(
            <SecondLayout
              article={props.article}
            />
    )
  }
  else{
    return  (
      <ThirdLayout
      article={props.article}
      />
    )
  }
  return (
    <>
    </>
  );
};

Article.getInitialProps = async ({query}) => {
  var { heading,date } = query
  heading = encodeURI(heading).replace(/'/g,'%27');
  const res = await fetch(  process.env.WEB_URI + '/api/article/' + heading.replace(/\?/g,'%3F') + '/'+date )
  const json = await res.json()
  return { article: json[0] }
}


export default Article;
