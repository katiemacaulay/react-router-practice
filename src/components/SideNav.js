import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard 
          </Link>
         
        </li>
        <li>
        <Link to="/charts"> <i className="fa fa-fw fa-dashboard" />
            CHarts
          </Link>
        </li>
        <li>
        <Link to="/Tables"> <i className="fa fa-fw fa-dashboard" />
            Tables
          </Link>
        </li>
        <li>
        <Link to="/Things"> <i className="fa fa-fw fa-dashboard" />
            Things
          </Link>
        </li>

      </ul>
    </div>);  
}

export default SideNav;
