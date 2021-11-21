import {Box, Button} from "@mui/material"
import React from "react";
import LockIcon from '@mui/icons-material/Lock';
import { shadows } from '@mui/system';


interface LevelItemProps{
    levelName: string;
    unlocked: boolean;

}

export const LevelItem: React.FC<LevelItemProps> = ({levelName,unlocked}) =>{

    function onLevelButtonClicked() {
        alert("start level");
    }

    return(
        (unlocked==true)
            ? <div><Box mr={3} ml={3}>
                <Button sx={{borderRadius: '50%' }}  style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}} className={"levelButton"} variant={"contained"} onClick={onLevelButtonClicked}> <p>{levelName}</p> </Button>
              </Box></div>
            : <div><Box mr={3} ml={3}>
                <Button sx={{borderRadius: '50%'}} startIcon={<LockIcon/>} style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}} disabled className={"levelButton"} variant={"contained"} onClick={onLevelButtonClicked}> <p>{levelName}</p> </Button>
              </Box></div>
    );
};
