import { Container, Button } from "@material-ui/core";
import { Box, ThemeProvider, createTheme, shadows, textAlign, positions  } from "@mui/system";
import { Link } from "react-router-dom"
import React from "react";
import "./Navbar.css"
import logo from "../../static/img/logo_en2.png"
import avatar from "../../static/img/avatar.png"

export interface NavbarProps{
    name: String
}

const theme = createTheme({
    palette: {
      background: {
        paper: '#004174',
      },
    },
  });

export const Navbar: React.FC<NavbarProps> = ({name}) => {
    return(
        <ThemeProvider theme={theme}>
        <Box>
            <Box sx={{height:43}}>
                <Box sx={{bgcolor: 'background.paper',
                        display: 'flex',
                        height: 43,
                        flexDirection: 'row',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px -20px 30px -30px inset',
                        }}>
                    <Box 
                        sx={{width: 1/10,
                            bgcolor:'background.paper',
                            minWidth: '150px',
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px -20px 30px -30px inset',
                            }}>
                    </Box>
                    <Box
                        sx={{
                            borderBottomLeftRadius: '100%',
                            width: 1/5,
                            bgcolor: 'white',
                            }}>
                    </Box>
                    <Box
                        sx={{
                            width: 1,
                            bgcolor: 'white',
                            }}>
                        <p style={{position: "relative", float: "right", marginRight:60}}> Here goes your {name}.</p> 
                    </Box>  
                </Box>  
                <img src={avatar} alt="Avatar" width="39" height="39" style={{border:"2px solid lightgrey",position:"absolute", right: 10, top: 0, borderRadius:'50%'}}/>
            </Box>
            <img src={logo} alt="UBB Picture" width="100" height="100" style={{position: "absolute", zIndex: 1, top: 2.5, left: 25}}/> 
            <Box
                sx={{
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
                    width: 1,
                    height: 36,
                    bgcolor: 'background.paper',
                    textAlign: 'left',
                    
                }}>
                <Link to="/">
                    <Box sx={{position: "static", float: "left", marginLeft: 15, top: 0,
                            ':hover': {
                                bgcolor: 'background.paper',
                              }}}>
                        <Button variant="text" style={{color:'#86D7FF', fontWeight: 'bold'}}>Homepage</Button>
                    </Box>
                </Link>
                <Link to="/leaderboard">
                    <Box sx={{position: "relative", float: "left", top: 0,
                            ':hover': {
                                bgcolor: 'background.paper',
                              }}}>
                        <Button variant="text" style={{color:'#86D7FF', fontWeight: 'bold'}}>Leaderboards</Button>
                    </Box>
                </Link>
                <Link to="/levels">
                    <Box sx={{position: "relative", float: "left", top: 0,
                            ':hover': {
                                bgcolor: 'background.paper',
                              }}}>
                        <Button variant="text" style={{color:'#86D7FF', fontWeight: 'bold'}}>Level</Button>
                    </Box>
                </Link>
            </Box>
        </Box>
        </ThemeProvider>
    );
} 