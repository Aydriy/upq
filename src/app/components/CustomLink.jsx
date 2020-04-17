import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";


export default function CustomLink() {
  return (
    <div className="navItem">
              <OldSchoolMenuLink
              activeOnlyWhenExact={true}
              to="/home"
              label="Home"
              />
              <OldSchoolMenuLink to="/services" label="Services" />
              <OldSchoolMenuLink to="/team" label="Team" />
              <OldSchoolMenuLink to="/contactus" label="Contact Us" />
       </div>       
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    

       
      <ul className="navelement" id="myLi">
              <li id="navFocus" className="navEl"><Link  to={to}  className={match ? "active" : ""}>{label}</Link></li>
      </ul>
 
                
   
  );
}



