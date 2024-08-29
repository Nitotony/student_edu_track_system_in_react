import logo from "./logo.svg";
import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import SmallCard from "./components/small_card";
import BigCard from "./components/big_card";
import { FaUserTie } from "react-icons/fa6";
import { FaPersonCircleCheck } from "react-icons/fa6";

function App() {
  const [regular, setRegular] = useState(0);
  const [remedial, setRemedial] = useState(0);
  const [paidclub, setPaidclub] = useState(0);

  return (
    <div className="App">
      <div className="menu">
        <Menu />
      </div>
      <div className="Prime">
        <div className="head">
          <p>Student Management</p>
        </div>
        <div className="content">
          <div className="Big_Card_Gallery">
            <BigCard
              logo={<FaUser color="white" />}
              count={regular}
              title="Regular Students"
              background="red"
            />
            <BigCard
              logo={<FaUserTie color="white" />}
              count={remedial}
              title="Remedial Students"
              background="purple"
            />
            <BigCard
              logo={<FaPersonCircleCheck color="white" />}
              count={paidclub}
              title="Paid Club Members"
              background="green"
            />
          </div>
          <div className="second_head">
            <h4>Menu</h4>
          </div>
          <div className="Small_Card_Gallery">
            <SmallCard
              topic="Add Regular Student"
              logo={<FaUser />}
              funk={() => setRegular(regular + 1)}
            />
            <SmallCard
              topic="Add Remedial Student"
              logo={<FaUserTie />}
              funk={() => setRemedial(remedial + 1)}
            />
            <SmallCard
              topic="Add Paid Club Member"
              logo={<FaPersonCircleCheck />}
              funk={() => setPaidclub(paidclub + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
