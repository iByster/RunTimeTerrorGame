import {Box, Button, TextField} from "@material-ui/core";
import Swal from "sweetalert2";
import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Logo from "../../img/logo-cs.png";
import UserController from "../../controllers/user/UserController";
import User from "../../controllers/user/UserEntity";
import { useAuthContext } from "../../providers/AuthProvider/AuthProvider";
import PlayerController from "../../controllers/player/PlayerController";
import { Player } from "../../controllers/player/PlayerEntity";

function Register() {
    const [usernameError, setUsernameError] = useState('');
    const [username, setUsername] = useState('');

    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [password, setPassword] = useState('');

    const [confirmedPasswordError, setConfirmedPasswordError] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const anyError = useRef(false);
    const navigate = useNavigate();
    const { login } = useAuthContext();

    function resetErrorFlags() {
        const errorSetters = [setUsernameError, setEmailError, setPasswordError, setConfirmedPasswordError];
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

    function validateConfirmedPassword() {
        return password === confirmedPassword;
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
                if(!validateConfirmedPassword())
                {
                    setConfirmedPasswordError("Passwords should match!");
                    setPasswordError("Passwords should match!");
                    anyError.current = true;
                }
                if (!anyError.current) {
                    try {
                        const controller = new UserController();
                        const playerController = new PlayerController();
                        const user = new User(username, password, email, '', 0);
                        const newPlayer = new Player(username, 0, '', '');
                        await playerController.createPlayer(newPlayer);
                        const token = await controller.register(user);
                        await 
                        login({username, token: token.string});
                        Swal.fire({
                            title: 'Account created successfully!',
                            icon: "success"
                        }).then(() => {
                            
                            navigate("/login");
                        });
                    } catch (e) {
                        await Swal.fire({
                            title: 'Something went wrong. Please try again later',
                            icon: "error"
                        })
                    }
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
        navigate("/login");
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
                <h2 className={"formTitle"}>Register</h2>
                <TextField className={"input"} error={usernameError.length>0} helperText={usernameError.length>0?<span><ErrorOutlineIcon/>{usernameError}</span>:""} onChange={(text)=>setUsername(text.target.value)} label={"Username"} variant={"outlined"}/>
                <TextField className={"input"} error={emailError.length>0} helperText={emailError.length>0?<span><ErrorOutlineIcon/>{emailError}</span>:""} onChange={(text)=>setEmail(text.target.value)} label={"Email"} variant={"outlined"}/>
                <TextField className={"input"} error={passwordError.length>0} helperText={passwordError.length>0?<span><ErrorOutlineIcon/>{passwordError}</span>:""} onChange={(text)=>setPassword(text.target.value)} label={"Password"} variant={"outlined"} type={"password"}/>
                <TextField className={"input"} error={confirmedPasswordError.length>0} helperText={confirmedPasswordError.length>0?<span><ErrorOutlineIcon/>{confirmedPasswordError}</span>:""} onChange={(text)=>setConfirmedPassword(text.target.value)} label={"Confirm password"} variant={"outlined"} type={"password"}/>
                <Button className={"input"} variant={"outlined"} onClick={onRegisterButtonClicked}>Create account</Button>
                <div style={{display: "inline-flex", flexDirection: "row", alignItems: "baseline"}}>Already have an account? <Button className={"input"} variant={"outlined"} onClick={onLoginButtonClicked} style={{marginLeft: "10px"}}>Sign in</Button></div>
            </Box>
        </div>
    );
}

export default Register;
