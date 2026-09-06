interface ProfileProps{
    name:string;
    role:string;
    learning:string;
}
function Profile({name,role,learning}:ProfileProps){
    
    return (
        <div>
            <h1>Name:{name}</h1>
            <h2>Role:{role}</h2>
            <p>Learning: {learning}</p>

        </div>
    );
}
export default Profile;