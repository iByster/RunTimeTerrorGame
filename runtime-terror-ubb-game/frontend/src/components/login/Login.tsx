import {Box, Button, TextField} from "@material-ui/core";
import Swal from "sweetalert2";
import "./Login.css"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [usernameError, setUsernameError] = useState('');
    const [username, setUsername] = useState('');
    const [anyError, setAnyError] = useState(false);
    const navigate = useNavigate();

    function resetErrorFlags() {
        setUsernameError('');
    }

    function onLoginButtonClicked() {
        resetErrorFlags();
        if(username.length < 3)
        {
            setUsernameError('Too short username provided.');
            setAnyError(true);
        }
        if(anyError)
        {
            Swal.fire({
                title: 'Logged in successfully!',
                icon: "success"
            }).then(() => {
                //navigate("/mainPage");
            });
        }
        else
        {
            Swal.fire({
                title: 'Wrong data given',
                icon: "error"
            })
        }
    }

    function onUsernameChanged(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setUsername(event.target.value);
        if(username.length<2)
        {
            setUsernameError("Too short username provided.");
        }
        else
            setUsernameError("");
    }

    function redirectToRegister(){
        navigate('/register');
    }

    return (
        <Box component={"form"}
             id={"loginForm"}
             sx={{
                 width: 500,
                 height: 350
             }}
        >
            <h2>Login</h2>
            <TextField className={"input"} error={usernameError.length>0} helperText={usernameError} onChange={onUsernameChanged} label={"Username or Email"} variant={"outlined"}/>
            <TextField className={"input"} label={"Password"} variant={"outlined"} type={"password"}/>
            <Button className={"input"} variant={"outlined"} onClick={onLoginButtonClicked}>Sign in</Button>
            <Button className={"input"} variant={"outlined"} onClick={redirectToRegister}>Register</Button>
        </Box>
    );
}
