import {Grid} from "@mui/material"
import React from "react";
import {LevelItem} from "./LevelItem/LevelItem";
import { withNavbar } from '../../decorators/withNavbar';

interface LevelProps{}

const Level: React.FC<LevelProps> = ({}) => {

    let mock_user_data={unlocked_levels:1,username:'andrei'}

    return(

        <Grid container
              spacing={0}
              direction="row"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '100vh' }}>


            <LevelItem levelName={"Level 1"} unlocked={(mock_user_data.unlocked_levels>=1) ? true : false} levelId={1}/>
            <LevelItem levelName={"Level 2"} unlocked={(mock_user_data.unlocked_levels>=2) ? true : false} levelId={2}/>
            <LevelItem levelName={"Level 3"} unlocked={(mock_user_data.unlocked_levels>=3) ? true : false} levelId={3}/>

        </Grid>
    );
}

export default withNavbar(Level);
