import { useState } from "react"

export default function Team() {
    const [Team, setTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = Team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () => {
        const newTeam = Team - 1;
        setTeam(newTeam);
    }

    const styleTeam = {
        border: "2px solid red",
        padding: '20px',
        margin: "20px",
        borderRadius: "20px"
    }

    const styleBtn = {
        display: "flex",
        gap: '20px',
        justifyContent: "center"
    }

    return (
        <div style={styleTeam}>
            <h2>Players: {Team}</h2>
            <div style={styleBtn}>
                <button onClick={handleAdd}>Add Player</button>
                <button onClick={handleRemove}>Remove Player</button>
            </div>
        </div>
    )
}