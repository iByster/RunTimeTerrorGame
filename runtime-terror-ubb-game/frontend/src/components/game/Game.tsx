import {useParams} from "react-router-dom";
import "./Game.css";
import {Player} from "../player/Player";

const Game = ()=>
{
    const {levelId} = useParams();
    return (
        <div id={"container"}>
            <h1>Level {levelId}</h1>
            <Player player={{life: 100, items: []}}/>
        </div>
    );
}

export default Game;
