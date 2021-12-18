import {Box, Button} from "@mui/material"
import React, {useRef} from "react";
import LockIcon from '@mui/icons-material/Lock';
import { shadows } from '@mui/system';
import {useNavigate} from "react-router-dom";


interface LevelItemProps{
    levelName: string;
    unlocked: boolean;
    levelId: number; //campul acesta il folosesc pentru a identifica nivelul in momentul in care fac click pe el si fac redirectarea
//    catre nivelul propriu-zis
}

export const LevelItem: React.FC<LevelItemProps> = (props: LevelItemProps) => {
    const navigate = useNavigate();
    function onLevelButtonClicked() {
        alert("start level");
        navigate(`/game/${props.levelId}`);
    }

    return(
        (props.unlocked==true)
            ? <div><Box mr={3} ml={3}>
                <Button sx={{borderRadius: '50%' }}  style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}} className={"levelButton"} variant={"contained"} onClick={onLevelButtonClicked}> <p>{props.levelName}</p> </Button>
              </Box></div>
            : <div><Box mr={3} ml={3}>
                <Button sx={{borderRadius: '50%'}} startIcon={<LockIcon/>} style={{maxWidth: '150px', maxHeight: '150px', minWidth: '150px', minHeight: '150px'}} disabled className={"levelButton"} variant={"contained"} onClick={onLevelButtonClicked}> <p>{props.levelName}</p> </Button>
              </Box></div>
    );
};
