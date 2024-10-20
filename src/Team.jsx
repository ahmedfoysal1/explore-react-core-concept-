import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const addPlayer = () =>{
        //method 1
        // const newPlayer = team + 1;
        // setTeam(newPlayer);

        //method 2
        setTeam(team + 1)
    }

    const reducePlayer = () => {
        //method 1
        // const newPlayer = team - 1;
        // setTeam(newPlayer);

        //method 2
        setTeam(team - 1);
    }

    const teamStyle ={
        border: '2px solid blue',
        margin: '20px',
        padding: '20px',
        borderRadius:'20px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addPlayer}>Add</button>
            <button onClick={reducePlayer}>Remove</button>
        </div>
    )
}