import React from "react";

import { HiUsers } from "react-icons/hi";
import { ImDrawer2 } from "react-icons/im";
import { BiSolidOffer } from "react-icons/bi";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import MenuItem from "./menuitem";
import { CgCollage } from "react-icons/cg";
import img from "../assets/Boston College.png"

import './Menu.css'

const menus=[
    {id:1,name:"Student Management",url:"/",logo:<HiUsers/>},
    {id:2,name:"Financial Management",url:"/",logo:<ImDrawer2/>},
    {id:3,name:"Quality Control",url:"/",logo:<BiSolidOffer/>},
    {id:4,name:"Report Delivery",url:"/",logo:<CgCollage/>},
    {id:5,name:"Attendance",url:"/", logo:<BsFileEarmarkBarGraphFill/>
    },
]
const Menu=()=>{
    return(
        <div className="Menu_body">
            <div className="Menu_logo">
                <img src={img} alt="" />
            </div>
            <div className="Menu_links">

                {
                    menus.map((menu)=>{
                        return(<MenuItem url={menu.url} name={menu.name} logo={menu.logo}/>)
                    })
                }



            </div>

        </div>

    )
}

export default Menu;