import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useUser } from '../../lib/hooks';
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import {  Button, Container, Grid, Paper } from '@material-ui/core';
import Link from 'next/link';
import Autocomplete from '@material-ui/lab/Autocomplete';



const FormLayout = (props) => {
    const [errorMsg, setErrorMsg] = useState('');
    const profilePictureRef = React.createRef();
    const [submitted,setSubmitted] = useState(false);

    const headings = [
        {name:"headlines", value:"headlines"},
        {name:"blog", value:"blog"},
        {name:"common", value:"common"},
        {name:"daily", value:"daily"},
    ];

    const handleSubmit = async (e) => {
        setSubmitted(true)
        console.log("Uploading")
        e.preventDefault();
        const news_type = e.currentTarget.news_type.value;
        const date = e.currentTarget.date.value
        const heading = e.currentTarget.heading.value;
        const subheading = e.currentTarget.subheading.value;
        const author = e.currentTarget.author.value;
        const content = e.currentTarget.content.value;
        const content_1 = e.currentTarget.content_1.value;
        const content_2 = e.currentTarget.content_2.value;
        const data = new FormData()
        data.append('upload_preset', 'digitalnews');
        if (profilePictureRef.current.files[0]) { data.append('file', profilePictureRef.current.files[0]); }
        const res = await fetch('https://api.cloudinary.com/v1_1/dp7gfnenp/image/upload', {
            method: 'POST',
            body: data
        });
        console.log("Image Uploaded")
        const file = await res.json();
        const img_url = file.secure_url
        const body = {
            news_type: news_type,
            date: date,
            heading: heading,
            subheading: subheading,
            author: author,
            content: content,
            content_1: content_1,
            content_2: content_2,
            image: img_url,
        }
        console.log("Making API request");
        const post_res = await fetch('/api/add_post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        console.log("API request Completed")
        if (post_res.status === 201) {
          const msg = await post_res.json();
          props.setSubmitted(true)
        } else {
          setErrorMsg(await post_res.text());
        }
      };

    return(
    <div style={{marginLeft:"18%",width:"66%",marginRight:"18%",textAlign:"center"}}>
        <Paper elevation={20}>
            <h1>Add new Article </h1>
            <form  onSubmit={handleSubmit}>
                {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}

                <div style={{width:"70%",marginRight:"15%",marginLeft:"15%"}}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      alignContent="stretch"
                    >  
                    <Grid item sm={6} xs={6}>
                        <Autocomplete
                        id="combo-box-demo"
                        options={headings}
                        getOptionLabel={(option) => option.name}
                        // style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="News Type" name="news_type" variant="outlined" />}
                        />
                    </Grid>
                      <Grid item sm={6} xs={6}>
                      <TextField id="date" label="Date" variant="outlined" name="date" InputLabelProps={{shrink: true,}} type="date" ></TextField>
                      </Grid>
                    </Grid>
                    <FormGroup style={{padding:"1%"}} >
                        <TextField id="heading" className="heading" label="Heading" name="heading" variant="outlined" color="primary"/>
                    </FormGroup>
                    <FormGroup style={{padding:"1%"}}>
                        <TextField id="sub-heading" label="SubHeading" name="subheading" variant="outlined" color="primary"/>
                    </FormGroup>
                    <FormGroup style={{padding:"1%"}}>
                        <TextField id="Author" label="Author" variant="outlined" name="author" color="primary"/>
                    </FormGroup>
                    <FormGroup style={{padding:"1%"}}>
                        <TextField id="Main-Content" label="paragraph 1" name="content" multiline rows={5} variant="outlined" color="primary"/>
                    </FormGroup>
                    <FormGroup style={{padding:"1%"}}>
                        <TextField id="Main-Content" label="paragraph 2" name="content_1" multiline rows={5} variant="outlined" color="primary"/>
                    </FormGroup>
                    <FormGroup style={{padding:"1%"}}>
                        <TextField id="Main-Content" label="paragraph 3" name="content_2" multiline rows={5} variant="outlined" color="primary"/>
                    </FormGroup>
                </div>
                <FormGroup>
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="secondary" component="span">
                            Upload Image
                        </Button>
                    <input accept="image/*" className="image" id="contained-button-file" type="file" name="images" ref={profilePictureRef}/>
                    </label>
                </FormGroup>
                <br/>
                <Button variant="outlined" type="submit" disabled={submitted} color="default">
                      Submit
                </Button>
            </form>
        </Paper>
        </div>
    )
} 

const SubmitLayout = () => {
    return (
        <Container maxWidth="md" style={{textAlign:"center"}}>
            <div>
                <h1>
                    Article Added
                </h1>
            </div>
            <Link href="/"><a>Go to Home</a></Link>
        </Container>
    )
}

const Add = () =>{
    const [submitted,setSubmitted] = useState(false);
    const [user, { mutate }] = useUser();

    if( user ){
        return(
            <>
                {submitted ? <SubmitLayout/> : <FormLayout setSubmitted={(i) => setSubmitted(i) }/> }
            </>
        )
    }
    else{
        return(
            <>
                <Container>
                    <div style={{textAlign:"center",marginTop:"5%"}}>
                        <h1>
                            Please 
                            <Link href="/login" >
                                <a> <u>LOGIN</u></a>
                            </Link> to add new Article
                        </h1>
                    </div>
                </Container>
            </>
        )
    }
}

export default Add