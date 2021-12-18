import {useParams} from "react-router-dom";
import "./Game.css";
import {Player} from "../player/Player";
import {useEffect, useRef, useState} from "react";

const Game = ()=>
{
    const {levelId} = useParams();
    const [timeUntilGameStart, setTimeUntilGameStart] = useState(3);
    useEffect(()=>
    {
        //    Facem un countdown
        const countdownInterval = setInterval(()=>
        {
            if(timeUntilGameStart > 0)
            {
                setTimeUntilGameStart(timeUntilGameStart - 1);
                console.log("Ceva");
            }
        }, 1000);
        return ()=>clearInterval(countdownInterval);
    }, [timeUntilGameStart]);
    if(timeUntilGameStart===0)
    {
        //Jocul se desfasoara aici
        return (
            <div className={"container"}>
                <h1>Level {levelId}</h1>
                <Player player={{life: 100, items: []}}/>
            </div>
        );
    }
    else
    {
        return (<div className={"container"} id={"countdown"}>
            <h1 id={"countdownText"}>{timeUntilGameStart}</h1>
        </div>);
    }
}

export default Game;
