import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useUser } from '../../lib/hooks';
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import { InputLabel, Button, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Link from 'next/link';



const FormLayout = (props) => {
    const [errorMsg, setErrorMsg] = useState('');
    const profilePictureRef = React.createRef();
    
    const handleSubmit = async (e) => {
        console.log("Uploading")
        e.preventDefault();
        const news_type = e.currentTarget.news_type.value;
        const heading = e.currentTarget.heading.value;
        const subheading = e.currentTarget.subheading.value;
        const author = e.currentTarget.author.value;
        const content = e.currentTarget.author.value;

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
            heading: heading,
            subheading: subheading,
            author: author,
            content: content,
            image: img_url,
        }
        console.log(body)
        console.log("Making API request");
        const post_res = await fetch('/api/add_post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        console.log("API request Completed")
        if (post_res.status === 201) {
          const msg = await post_res.json();
          console.log(msg)
          props.setSubmitted(true)
        } else {
          setErrorMsg(await post_res.text());
        }
      };

    return(
    <div style={{marginLeft:"18%",border:"1px solid black",width:"66%",marginRight:"18%",textAlign:"center"}}>
            <h1>Add new Article </h1>
            <form  onSubmit={handleSubmit}>
                {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
                <FormGroup style={{padding:"1%"}}>
                    <TextField id="news_type" label="News Type" variant="outlined" name="news_type" color="primary"/>
                </FormGroup>
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
                    <TextField id="Main-Content" label="Content" name="content" multiline rows={10} variant="outlined" color="primary"/>
                </FormGroup>
                <FormGroup>
                    <input
                        accept="image/*"
                        className="image"
                        id="contained-button-file"
                        multiple
                        type="file"
                        style={{display:"none"}}
                        name="images"
                        ref={profilePictureRef}
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                        Upload
                        </Button>
                    </label>
                </FormGroup>
                <Button variant="outlined" type="submit" color="default">
                      Submit
                </Button>
            </form>
        </div>
    )
} 

const SubmitLayout = () => {
    return (
        <Container maxWidth="md">
            Article Added 
            <Link href="/"><a>Go to Home</a></Link>
        </Container>
    )
}
const Add = () =>{
    const [submitted,setSubmitted] = useState(false);
    return(
        <>
            {submitted ? <SubmitLayout/> : <FormLayout setSubmitted={(i) => setSubmitted(i) }/> }
        </>
    )
}

export default Add