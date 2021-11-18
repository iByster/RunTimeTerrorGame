import {Box, Button, TextField} from "@material-ui/core";
import Swal from "sweetalert2";
import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

function Register() {
    const [usernameError, setUsernameError] = useState('');
    const [username, setUsername] = useState('');

    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [password, setPassword] = useState('');

    const anyError = useRef(false);
    const navigate = useNavigate();

    function resetErrorFlags() {
        const errorSetters = [setUsernameError, setEmailError, setPasswordError];
        errorSetters.forEach(val=>val(''));
        anyError.current = false;
    }

    const validateField = (fieldValue: string, regexp: RegExp) =>
    {
        return regexp.test(fieldValue);
    }

    function validateUsername():boolean {
        return validateField(username, /^[\S]{3,50}$/);
    }

    function validateEmail():boolean {
        return validateField(email, /^[a-zA-Z0-9]{1,50}@[a-zA-Z0-9]{1,50}.[a-zA-Z]{2,5}$/);
    }

    function validatePassword():boolean
    {
        return validateField(password, /^[\S]{8,50}$/);
    }

    function onRegisterButtonClicked() {
        Swal.fire({
            title: 'Confirm?',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            showCancelButton: true,
            confirmButtonColor: '#006200',
            cancelButtonColor: '#b20000'
        }).then(async (r) => {
            if (r.isConfirmed) {
                //Trebuie facuta verificarea datelor pe frontend si backend
                //Validare front-end
                resetErrorFlags();
                //Username
                if (!validateUsername()) {
                    setUsernameError('Username should be between 3 and 50 alphanumeric chars long!');
                    anyError.current = true;
                }
                if(!validateEmail())
                {
                    setEmailError('Wrong email given. Example: smth@domain.com');
                    anyError.current = true;
                }
                if(!validatePassword())
                {
                    setPasswordError("Password should be between 8 and 50 characters long!");
                    anyError.current = true;
                }
                if (!anyError.current) {
                    Swal.fire({
                        title: 'Account created successfully!',
                        icon: "success"
                    }).then(() => {
                        navigate("/");
                    });
                } else {
                    await Swal.fire({
                        title: 'Wrong data given',
                        icon: "error"
                    })
                }
            }
        })
    }

    function onLoginButtonClicked() {
        navigate("/");
    }

    return (
        <div
            className={"formparent"}>
            <Box component={"form"}
                 id={"register"}
                 className={"form"}
                 sx={{
                     width: 500,
                     height: 500
                 }}
            >
                <h2>Register</h2>
                <TextField className={"input"} error={usernameError.length>0} helperText={usernameError} onChange={(text)=>setUsername(text.target.value)} label={"Username"} variant={"outlined"}/>
                <TextField className={"input"} error={emailError.length>0} helperText={emailError} onChange={(text)=>setEmail(text.target.value)} label={"Email"} variant={"outlined"}/>
                <TextField className={"input"} error={passwordError.length>0} helperText={passwordError} onChange={(text)=>setPassword(text.target.value)} label={"Password"} variant={"outlined"} type={"password"}/>
                <Button className={"input"} variant={"outlined"} onClick={onRegisterButtonClicked}>Create account</Button>
                <div style={{display: "inline-flex", flexDirection: "row", alignItems: "baseline"}}>Already have an account? <Button className={"input"} variant={"outlined"} onClick={onLoginButtonClicked} style={{marginLeft: "10px"}}>Sign in</Button></div>
            </Box>
        </div>
    );
}

export default Register;
