import {Box, Button, TextField} from "@material-ui/core";
import Swal from "sweetalert2";
import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Logo from "../../img/logo-cs.png";
import { useAuthContext } from "../../providers/AuthProvider/AuthProvider";
import UserController from "../../controllers/user/UserController";
import User from "../../controllers/user/UserEntity";

export default function Login() {
    const { login } = useAuthContext();
    const [usernameError, setUsernameError] = useState('');
    const [username, setUsername] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [password, setPassword] = useState('');

    const anyError = useRef(false);
    const navigate = useNavigate();

    function resetErrorFlags() {
        const errorSetters = [setUsernameError, setPasswordError];
        errorSetters.forEach(val=>val(''));
        anyError.current = false;
    }

    const validateField = (fieldValue: string, regexp: RegExp) =>
    {
        return regexp.test(fieldValue);
    }

    function validateUsername():boolean {
        if (/@/.test(username)) {
            return validateField(username,/^[a-zA-Z0-9]{1,50}@[a-zA-Z0-9]{1,50}.[a-zA-Z]{2,5}$/);
        }
        return validateField(username, /^[\S]{3,50}$/);
    }

    function validatePassword():boolean
    {
        return validateField(password, /^[\S]{8,50}$/);
    }

    async function onLoginButtonClicked() {
        //Trebuie facuta verificarea datelor pe frontend si backend
        //Validare front-end
        resetErrorFlags();
        //Username
        if (!validateUsername()) {
            if (/@/.test(username)) {
                setUsernameError('Wrong email given. Example: smth@domain.com');
                anyError.current = true;
            } else {
                setUsernameError('Username should be between 3 and 50 alphanumeric chars long!');
                anyError.current = true;
            }
        }
        if(!validatePassword())
        {
            setPasswordError("Password should be between 8 and 50 characters long!");
            anyError.current = true;
        }
        if (!anyError.current) {
            try {
                const controller = new UserController();
                const user = new User(username, password, '', '', 0);
                const token = await controller.login(user);
                login({username, token: token.string});
                Swal.fire({
                    title: 'Signed in successfully!',
                    icon: "success"
                }).then(() => {
                    
                    navigate("/");
                });
            } catch (e) {
                await Swal.fire({
                    title: 'Wrong credentials given',
                    icon: "error"
                })
            }
        } else {
            Swal.fire({
                title: 'Wrong credentials given',
                icon: "error"
            })
        }
    }

    function onRegisterButtonClicked(){
        navigate('/register');
    }

    return (
        <div
            className={"formparent"}>
            <Box component={"form"}
                 id={"login"}
                 className={"form"}
                 sx={{
                     width: 500,
                     height: 350
                 }}
            >
                <div className={"banner"}>
                    <div>
                        {/*Left side*/}
                    </div>
                    {/*Center piece*/}
                    <h1 className={"gametitle"}>UBB Game</h1>
                    {/*Right side*/}
                    <div>
                        <img alt={"Sigla UBB"} src={Logo} width={100} height={100}/>
                    </div>
                </div>
                <h2 className={"formTitle"}>Login</h2>
                <TextField className={"input"} error={usernameError.length>0} helperText={usernameError} onChange={(text)=>setUsername(text.target.value)} label={"Username or Email"} variant={"outlined"}/>
                <TextField className={"input"} error={passwordError.length>0} helperText={passwordError} onChange={(text)=>setPassword(text.target.value)} label={"Password"} variant={"outlined"} type={"password"}/>
                <Button className={"input"} variant={"outlined"} onClick={onLoginButtonClicked}>Sign in</Button>
                <div style={{display: "inline-flex", flexDirection: "row", alignItems: "baseline"}}>Don't have an account?<Button className={"input"} variant={"outlined"} onClick={onRegisterButtonClicked} style={{marginLeft: "10px"}}>Create account</Button></div>
            </Box>
        </div>
    );
}
