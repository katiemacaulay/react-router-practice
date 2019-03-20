import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
          {/* PUT YOUR ROUTES HERE */}
        </div>
      </div>
    </div>

  );
}


export default App;
