import Button from '../AppComponents/button';
import Navbar from '../AppComponents/navbar'


function Home(){
    return(
        <div>
            <Navbar text="Whizzy Academy" color="#1e88e5"/>
            <h1>My Components</h1>
            <Button text="Clear" color="#d50000"/>
            <Button text="Login" color="#1e88e5"/>
            <Button text="Cancel" color="#880e4f"/>
            <Button text="Submit" color="#003300"/>
        </div>      

    )
}

export default Home;