import { useEffect, useState } from "react";
import './Box.css'
import Friend from "./Friend";

export default function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(res => res.json())
           .then(data => setFriends(data))
           .catch(err => console.log("ERROR: ", err));
    }, [])

    return (
        <div className="box">
            <h1>friends: {friends.length}</h1>
            {
                friends.map((friend) => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}