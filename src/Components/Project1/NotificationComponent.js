import ProfileComponent from '../Project1/ProfileComponent';

function NotificationComponent(props) {

    return(
        <div>
            <div>Notification Component</div>
            <ProfileComponent
            not_firstname = {props.det_firstname} 
            not_lastname = {props.det_lastname}
            not_email = {props.det_email} 
            not_birthdate = {props.det_birthdate}
            not_mobile = {props.det_mobile}
            />
        </div>

    );
}
export default NotificationComponent;