export default function Friend({friend}) {
    console.log(friend);
    const {id, name, email, username, website} = friend;

    return (
        <div className="box">
            <h2>Id: {id}</h2>
            <h3>Name: {name} </h3>
            <p>username: {username}</p>
            <p>E-mail: {email}</p>
            <p>website: {website}</p>
        </div>
    )
}