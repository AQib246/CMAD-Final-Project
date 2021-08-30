


import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import logo from "../images/shelby3.png";
import { Link } from "react-router-dom";
import "../components/Styling/searchBarstyle.css";
import firebase from "firebase"




class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      userTrue : true,
     

    }
    // const [isOpen, setIsOpen ] = useState(false)
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          userTrue : false
        })
      }
    })
  }
 
  // toggle = () => this.state({ isOpen: !this.state.isOpen })
  HandleLogout = () => {
   firebase.auth().signOut().then(()=>{
     this.setState({
         userTrue : false
     })
     alert("You are successfully Logout")
 })
 }

 toogle = () =>{
   alert()
  this.setState({
    isOpen: true
    
  })
}
  render() {
    let {isOpen , userTrue} = this.state 
    return (
      <div style={{ backgroundColor: 'black', color: "white" }}>

        <Navbar color="" light expand="md" style = {{marginLeft:"2%"}} >
          <NavbarBrand href="/"><img src={logo} height="44px" width="100px" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} style={{ backgroundColor: "#ffd700" , marginRight:"10px" }} />
          <Collapse isOpen={isOpen} navbar >
            <Nav className="mr-auto" navbar >


              <NavItem>
                <NavLink><Link to="/" className="NavList">HOME</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="Showroom" className="NavList">SHOWROOM</Link></NavLink>
              </NavItem>
              <NavItem >
                <NavLink ><Link to="About" className="NavList">ABOUT</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><Link to="Contact" className="NavList">CONTACT</Link></NavLink>
              </NavItem>
              {userTrue ?
                <NavItem>
                  <NavLink>
                    <Link to="login" className="NavList">LOGIN</Link>
                  </NavLink>
                </NavItem> :
                <NavItem>
                  <NavLink>
                    <Link to="" className="NavList" onClick={this.HandleLogout} >LOGOUT</Link>
                  </NavLink>
                </NavItem>}



            </Nav>
          </Collapse>
        </Navbar>
      </div>

    )

  }
}



// const [isOpen, setIsOpen , isLogin ] = useState(false);


export default NavBar;



