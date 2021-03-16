import NotificationComponent from '../Project1/NotificationComponent';

function DetailComponent(props) {

    return(
        <div>
            <div>Detial Component</div>
            <NotificationComponent 
            det_firstname = {props.firstname} 
            det_lastname = {props.lastname}
            det_email = {props.email} 
            det_birthdate = {props.birthdate}
            det_mobile = {props.mobile}
            />
        </div>

    );
}
export default DetailComponent;