import React from 'react';
import { useUser } from '../lib/hooks';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import { Typography, Link } from '@material-ui/core';
import fetch from 'isomorphic-unfetch'
import Paper from '@material-ui/core/Paper';

const IndexPage = (props) => {
  const [user] = useUser();
  const main_headline = props.main_headline
  const other_headlines = props.other_headlines 
  const headlines_grid_width = parseInt(props.headlines_grid_width)
  const old_headlines = props.old_headlines
  const blogs = props.blogs
  const main_blog = props.main_blog
  const common_articles = props.common_articles
  const remaining_headlines = props.remaining_headlines

  return (

    <>
    <Container maxWidth="xl">
      <br/>
      <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start" alignContent="stretch" style={{borderTop:"0.1px solid rgb(158, 157, 157)"}}>        
        
        {/* Column 1 */}
        <Grid item sm={9} xs={12} style={{borderRight:"0.1px solid rgb(158, 157, 157)"}}>
        
          {/* 2 rows */}
          <Grid container direction="row" justify="flex-start" alignItems="flex-start" alignContent="stretch">
            {/* 1st Row */}
            <Grid item sm={12} xs={12} style={{borderBottom:"0.5px solid rgb(158, 157, 157)"}}>
              <Grid container direction="row" justify="flex-start" alignItems="center" >
                {/* Main Headline  */}
                <Grid container item sm={9} xs={12} style={{borderRight:"0.1px solid rgb(200, 200, 200)"}} justify="space-between" alignItems="stretch" >  
                      <Grid item sm={5} xs={12} style={{padding:"2%",paddingRight:"0%",paddingLeft:"0%"}}>
                        { main_headline.image ? 
                          <img src={main_headline.image} style={{marginTop:"1%"}} alt="image" height="95%" width="100%"/> : 
                          <></>
                        }
                      </Grid>
                      <Grid item sm={7} xs={12} style={{padding:"1%",paddingRight:"0.1%"}}>
                        <h1>
                            <Link href={`/article/${main_headline.heading}/${main_headline.date}`}>
                              <a>{main_headline.heading}</a>                          
                            </Link>
                        </h1>
                        <p style={{paddingTop:"5%"}}>{main_headline.subheading}</p>
                      </Grid>
 
                </Grid>
                
                {/* Main Blog */}
                <Grid item sm={3} xs={12} style={{padding:"1%"}}>
                        
                    <small style={{textDecoration:"none",fontWeight:"lighter"}}>
                        <span style={{float:"left",textTransform:"capitalize",color:"red"}}>{main_blog.news_type}</span> 
                        <span style={{float:"right"}}>{main_blog.date}</span> 
                      </small>
                    <h2 style={{paddingTop:"1%"}}>
                      <Link href={`/article/${main_blog.heading}/${main_blog.date}`}>
                        <a>{main_blog.heading}</a>
                      </Link>
                    </h2>
                    <img src={main_blog.image} style={{marginTop:"1%"}} alt="image" height="95%" width="100%"/>
                </Grid>
              </Grid>
            </Grid>
            
            {/* 2nd Row */}
            <Grid item sm={12} xs={12} style={{borderBottom:"0.5px solid rgb(158, 157, 157)"}}>
                <Grid container direction="row" justify="flex-start" alignItems="stretch" alignContent="stretch">
                  { other_headlines ? 
                    other_headlines.map( headline => (
                      <Grid item sm={headlines_grid_width} xs={12} key={headline._id} style={{borderRight:"0.1px solid rgb(220, 220, 220)",padding:"1%",paddingBottom:"0%"}}>
                        
                        <small style={{textDecoration:"none",fontWeight:"lighter"}}>
                            <span style={{float:"left",textTransform:"capitalize",color:"red"}}>{headline.news_type}</span> 
                            <span style={{float:"right"}}>{headline.date}</span> 
                          </small>
                        <h2 style={{paddingTop:"1%"}}>
                          <Link href={"/article/"+headline.heading+"/"+headline.date} >
                            <a>{headline.heading}</a>
                          </Link>
                        </h2>
                        {/* <p>
                          {headline.subheading}
                        </p> */}
                      </Grid>
                    )) : <></>
                  }
                </Grid>
            </Grid>
          </Grid>
          
          {/* other rows */}
          <Grid container direction="row" justify="space-around" alignItems="stretch" >
            
            {/* old Headlines */}
            <Grid item sm={6} xs={12} md={4} style={{ borderBottom:"0.5px solid rgb(158, 157, 157)", borderRight:"0.5px solid rgb(158, 157, 157)"}} >
                <Grid container direction="column" justify="space-around" alignItems="stretch">
                { remaining_headlines ? 
                  remaining_headlines.map( headline => (
                    <Grid item key={headline._id}style={{borderBottom:"0.5px solid rgb(200, 200, 200)", padding:"1%"}}>
                        <small style={{textDecoration:"none",fontWeight:"lighter"}}>
                            <span style={{float:"left",textTransform:"capitalize",color:"red"}}>{headline.news_type}</span> 
                            <span style={{float:"right"}}>{headline.date}</span> 
                          </small>
                        <h2 style={{paddingTop:"1%"}}>
                          <Link href={`/article/${headline.heading}/${headline.date}`}>
                            <a>{headline.heading}</a>
                          </Link>
                        </h2>
                    </Grid>
                  )) : <></>
                }
                { old_headlines ? 
                  old_headlines.map( headline => (
                    <Grid item key={headline._id}style={{borderBottom:"0.5px solid rgb(200, 200, 200)", padding:"1%"}}>
                        <small style={{textDecoration:"none",fontWeight:"lighter"}}>
                            <span style={{float:"left",textTransform:"capitalize",color:"red"}}>{headline.news_type}</span> 
                            <span style={{float:"right"}}>{headline.date}</span> 
                          </small>
                        <h2 style={{paddingTop:"1%"}}>
                          <Link href={`/article/${headline.heading}/${headline.date}`}>
                            <a>{headline.heading}</a>
                          </Link>
                        </h2>
                    </Grid>
                  )) : <></>
                }
                </Grid>
            </Grid>
            
            {/* Blogs */}
            <Grid item sm={6} xs={12} md={4} style={{borderBottom:"0.5px solid rgb(158, 157, 157)",borderRight:"0.5px solid rgb(158, 157, 157)"}} >
              <Grid container direction="column" justify="space-around" alignItems="stretch">
                {
                  blogs.map( blog => (
                    <Grid item key={blog._id}style={{borderBottom:"0.5px solid rgb(200, 200, 200)", padding:"1%"}}>
                        <small style={{textDecoration:"none",fontWeight:"lighter"}}>
                            <span style={{float:"left",textTransform:"capitalize",color:"red"}}>{blog.news_type}</span> 
                            <span style={{float:"right"}}>{blog.date}</span> 
                          </small>
                          <div style={{marginLeft:"5%"}}>
                            <img src={blog.image} style={{marginTop:"1%"}} alt="image" height="85%" width="85%"/>
                            <h2 style={{paddingTop:"1%"}}>
                              <Link href={`/article/${encodeURI(blog.heading).replace('?','%3F')}/${blog.date}`}>
                                <a>{blog.heading}</a>
                              </Link>
                            </h2>
                          </div>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
            
            {/* Common */}
            <Grid item sm={6} xs={12} md={4} style={{borderBottom:"0.5px solid rgb(158, 157, 157)"}}>
            {
                  common_articles.map( blog => (
                    <Grid item key={blog._id}style={{borderBottom:"0.5px solid rgb(200, 200, 200)", padding:"1%"}}>
                        <small style={{textDecoration:"none",fontWeight:"lighter"}}>
                            <span style={{float:"left",textTransform:"capitalize",color:"red"}}>{blog.news_type}</span> 
                            <span style={{float:"right"}}>{blog.date}</span> 
                          </small>
                        <h2 style={{paddingTop:"1%"}}>
                          <Link href={`/article/${blog.heading}/${blog.date}`}>
                            <a>{blog.heading}</a>
                          </Link>
                        </h2>
                        <img src={blog.image} style={{marginTop:"1%"}} alt="image" height="95%" width="100%"/>  
                    </Grid>
                  ))
              }
            </Grid>
          </Grid>
        </Grid>

        {/* Column 2 */}
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
    </>
  );
};

IndexPage.getInitialProps = async () => {
  
  const headlines_res = await fetch(  process.env.WEB_URI + '/api/article/headlines/today')
  var json = await headlines_res.json()
  const headlines_count = Object.keys(json).length;
  var main_headline = null
  var other_headlines = null
  var remaining_headlines = null
  var headlines_grid_width = 3
  if (headlines_count > 0){
    main_headline = json[0] 
    if(headlines_count > 5){
      other_headlines = json.slice(1,5)
      if( headlines_count > 10 ){
        remaining_headlines = json.slice(5,11);
      }
      else{
        remaining_headlines = json.slice(5,headlines_count);
      }
    }
    else{
      other_headlines = json.slice(1,headlines_count)
      headlines_grid_width = Math.floor(12/(headlines_count - 1));
    }
  }

  const old_headlines_res = await fetch(  "http://localhost:3000" + '/api/article/headlines/all')
  var json = await old_headlines_res.json()
  const old_headlines_count = Object.keys(json).length;
  var old_headlines = null
  if(main_headline == null){
    main_headline = json[0]
    if( old_headlines_count > 5){
      other_headlines = json.slice(1,5)
      if( old_headlines_count > 10 ){
        remaining_headlines = json.slice(5,10)
      }
      else{
        remaining_headlines = json.slice(5,old_headlines_count)
      }
    }
    else{
      other_headlines = json.slice(1,old_headlines_count)  
      headlines_grid_width = Math.floor(12/(old_headlines_count - 1));
    }
  }
  old_headlines = null
  if( old_headlines_count > 0){
    if( remaining_headlines && (Object.keys(remaining_headlines).length < 6) ){
      old_headlines = json.slice(0,6 - Object.keys(remaining_headlines).length)
    }
    else if( Object.keys(json).length > 6 ){
      remaining_headlines = json.slice(0,6)
    }
    else{
      remaining_headlines = json.slice(0,Object.keys(json).length)
    }
  }

  const blogs_res = await fetch(  process.env.WEB_URI + '/api/article/blogs')
  var json = await blogs_res.json()
  var blogs = json;
  const main_blog = json[0]
  const blog_count  = Object.keys(json).length
  if( blog_count > 7 ){
    blogs = json.slice(1,7);
  }

  const common_res = await fetch(  process.env.WEB_URI + '/api/article/common')
  var json = await common_res.json()
  var common_news = json;

  return { 
    main_headline: main_headline,
    other_headlines: other_headlines,
    headlines_grid_width: headlines_grid_width, 
    old_headlines : old_headlines,
    blogs : blogs,
    main_blog: main_blog,
    common_articles: common_news,
    remaining_headlines: remaining_headlines
  }
}


export default IndexPage;
