import {Box, Button, TextField} from "@material-ui/core";
import Swal from "sweetalert2";
import "./Register.css"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function Register(props: any) {
    const [usernameError, setUsernameError] = useState('');
    const [anyError, setAnyError] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    function resetErrorFlags() {
        setUsernameError('');
    }

    function onRegisterButtonClicked() {
        Swal.fire({
            title: 'Confirm?',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            showCancelButton: true,
            confirmButtonColor: '#006200',
            cancelButtonColor: '#b20000'
        }).then((r: { isConfirmed: any; }) => {
            if(r.isConfirmed)
            {
                //Trebuie facuta verificarea datelor pe frontend si backend
                //Validare front-end
                resetErrorFlags();
                //Username
                if(username.length < 3)
                {
                    setUsernameError('Too short username provided.');
                    setAnyError(true);
                }
                if(anyError)
                {
                    Swal.fire({
                        title: 'Account created successfully!',
                        icon: "success"
                    }).then(() => {
                        navigate("/");
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
        })
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

    return (
        <Box component={"form"}
             id={"registerForm"}
             sx={{
                 width: 500,
                 height: 500
             }}
        >
            <h2>Register</h2>
            <TextField className={"input"} error={usernameError.length>0} helperText={usernameError} onChange={onUsernameChanged} label={"Username"} variant={"outlined"}/>
            <TextField className={"input"} label={"Email"} variant={"outlined"}/>
            <TextField className={"input"} label={"Password"} variant={"outlined"} type={"password"}/>
            <Button className={"input"} variant={"outlined"} onClick={onRegisterButtonClicked}>Create account</Button>
        </Box>
    );
}

export default Register;
