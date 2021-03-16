
import MyFirstComponent from './Components/MyFirstComponent';
import MySecondComponent from './Components/MySecondComponent';
import MyThirdComponent from './Components/MyThirdComponent';
import MyFourthComponent from './Components/MyFourthComponent';
import MyFifthComponent from './Components/MyFifthComponent';
import MySixthComponent from './Components/MySixthComponent';
import MySeventhComponent from './Components/MySeventhComponent';
import MyEighthComponent from './Components/MyEighthComponent';
import MyNinethComponent from './Components/MyNinethComponent';
import MyTenthComponent from './Components/MyTenthComponent';

import MasterComponent from './Components/MasterComponent';
import ParentComponent from './Components/ParentComponent';

import DashboardComponent from './Components/Project1/DashboardComponent';

import Counter from './Components/State/counter';

import Home from './Components/pages/home';



function App() {
  return (
    <div>
      <MasterComponent name="1" height="45"/>
      <MasterComponent name="2" height="67"/>
      <MasterComponent name="3" height="34"/>
      <MasterComponent name="4" height="30"/>

      <hr/>

      <ParentComponent name="Kojo" gender="Female" age="23" email="kojo@gmial.com" />

      <hr/>

      <DashboardComponent />

      <hr/>

      <Home />
    </div>
   
    
    );
}


export default App;
