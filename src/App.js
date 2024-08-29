import logo from './logo.svg';
import Menu from './components/Menu';
import './App.css';
import { useState } from 'react';
import { FaUser } from "react-icons/fa";

import BigCard from './components/big_card';
function App() {

  const [regular,setRegular]=useState(0);
  const[remedial,setRemedial]=useState(0);
  const [paidclub,setPaidclub]=useState(0);
  
  return (
    <div className="App">
      <div className="menu">
       <Menu/>
      </div>
      <div className="content">
      
        <div className="Big_Card_Gallery">
          <BigCard
            logo={<FaUser color="white" />}
            count={regular}
            title="Regusdlkfsdfkjasdlfjsalr Students"
            background="blue"
          />
          <BigCard
            logo={<FaUser color="white" />}
            count={remedial}
            title="Regualr Students"
            background="blue"
          />
          <BigCard
            logo={<FaUser color="white" />}
            count={paidclub}
            title="Regualr Students"
            background="blue"
          />
        </div>
        <div className="Small_Card_Gallery"></div>
      </div>
    </div>
  );
}

export default App;
