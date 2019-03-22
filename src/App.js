import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let Tables = () => <div>Table Stuff</div>;
let Charts = () => <div>Chart Stuff</div>;
let Things = () => <div>Things</div>;

function App() {
  return (
    <Router>
      <div> 
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <TopNav />
            <SideNav />
          </nav>
          <div style={{backgroundColor: "white"}}>
           <Route exact path="/" component={Dashboard} />
           <Route exact path="/things" component={Things} />
           <Route path="/charts" component={Charts} />
           <Route path="/tables" component={Tables} />
          </div>
        </div>
      </div>
    </Router>
  );
}


export default App;
