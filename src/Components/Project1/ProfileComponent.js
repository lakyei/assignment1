

function ProfileComponent(props) {

    return(
        <div>
            <h1>Profile Component</h1>
           
            <p>First Name = {props.not_firstname} </p>
            <p>Last Name = {props.not_lastname}</p>
            <p>Email Name = {props.not_email}</p>
            <p>Date of Birth = {props.not_birthdate}</p>
            <p>Mobile No. = {props.not_mobile}</p>
        
        </div>

    );
}
export default ProfileComponent;