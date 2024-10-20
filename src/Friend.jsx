export default function Friend({friend}){
    const friendStyle = {
        border:"2px solid blue",
        margin: '15px',
        padding: '15px',
        borderRadius: "15px"
    }
    const {name, email} = friend;
    return(
        <div className="box">
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
        </div>
    )
}