
import React, { Component } from "react";
import Home from "./components/Home";
import Showroom from "./components/showroom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contactus";
import LoginForm from "./components/forms/LoginForm";
import SigninForm from "./components/forms/SigninForm";
import Bikeinfo from "./components/forms/AddBikeInfo";
import firebase from "firebase";
import "firebase/storage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { isModuleDeclaration } from "@babel/types";
import Remove from "./components/forms/remove_comp/remov";
import {Redirect} from "react-router-dom"
import Header from "./components/Navbar";
import Footer from "./components/Footer"


var firebaseConfig = {
  apiKey: "AIzaSyDnIbjzH2hs-b3f8Jab6tzyfNZ1U0vLpog",
  authDomain: "my-first-project-bb872.firebaseapp.com",
  databaseURL: "https://my-first-project-bb872.firebaseio.com",
  projectId: "my-first-project-bb872",
  storageBucket: "my-first-project-bb872.appspot.com",
  messagingSenderId: "703708037504",
  appId: "1:703708037504:web:1de768674a45d3a6578165",
  measurementId: "G-N3BXSVFLYJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//    firebase.analytics();
const storage = firebase.storage()

const listitems = [
  {
    id: 0,
    pic: "/images/pic1.jpg",
    Model: "Ninja H2",
    Price: "Rs:850,000/-",
    EngineDis: " 600 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "16 Litre",
    SellerCellNo: "0315-1234567"



  },
  {
    id: 1,
    pic: "/images/pic2.jpg",
    Model: "Kawasaki H2",
    Price: "Rs:450,000/-",
    EngineDis: " 600 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "New",
    FuelCapacity: "12 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 2,
    pic: "/images/pic3.jpg",
    Model: "Yamaha R1",
    Price: "Rs:250,000/-",
    
    EngineDis: " 1000 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "14 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 3,
    pic: "/images/pic4.jpg",
    Model: "Kawasaki H2",
    Price: "Rs:380,000/-",
    
    EngineDis: " 250 CC Single Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "15 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 4,
    pic: "/images/pic5.jpg",
    Model: "Kawasaki Ninja ",
    Price: "Rs:250,000/-",
    
    EngineDis: " 600 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "New",
    FuelCapacity: "14 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 5,
    pic: "/images/pic6.jpg",
    Model: "Yamaha MT-10",
    Price: "Rs:640,000/-",
    
    EngineDis: " 350 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "15 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 6,
    pic: "/images/pic7.jpg",
    Model: "Yamaha MT-07",
    Price: "Rs:320,000/-",
    
    EngineDis: " 1000 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "14 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 7,
    pic: "/images/pic8.jpg",
    Model: "Kawasaki Z800",
    Price: "Rs:260,000/-",
    
    EngineDis: " 600 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "17 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 8,
    pic: "/images/pic9.jpg",
    Model: "Honda Crf-540",
    Price: "Rs:820,000/-",
    
    EngineDis: " 300 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "15 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 9,
    pic: "/images/pic10.jpg",
    Model: "Ducati 1200S",
    Price: "Rs:530,000/-",
    
    EngineDis: " 250 CC Single Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "10 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 10,
    pic: "/images/pic11.jfif",
    Model: "Suzuki GSX",
    Price: "Rs:1240,000/-",
    
    EngineDis: " 1000 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "15 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 11,
    pic: "/images/pic12.jpg",
    Model: "Kawasaki Z900",
    Price: "Rs:560,000/-",
    
    EngineDis: " 750 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "New",
    FuelCapacity: "16 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 12,
    pic: "/images/pic13.jpg",
    Model: "Yahmaha MT-07",
    Price: "Rs:230,000/-",
    
    EngineDis: " 250 CC Single Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "15 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 13,
    pic: "/images/pic14.jfif",
    Model: "BMW S1000R",
    Price: "Rs:950,000/-",
    
    EngineDis: " 600 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "15 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 14,
    pic: "/images/pic15.jfif",
    Model: "Yamaha MT-10",
    Price: "Rs:1650,000/-",
    
    EngineDis: " 600 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "15 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 15,
    pic: "/images/pic16.jpg",
    Model: "Ducati 797",
    Price: "Rs:950,000/-",
    
    EngineDis: " 600 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "New",
    FuelCapacity: "11 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 16,
    pic: "/images/pic17.jfif",
    Model: "Honda CBR 500",
    Price: "Rs:375,000/-",
    
    EngineDis: " 350 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "15 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 17,
    pic: "/images/pic18.jpg",
    Model: "Honda CBR 150",
    Price: "Rs:250,000/-",
    EngineDis: " 600 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "New",
    FuelCapacity: "15 Litre",
    SellerCellNo: "0315-1234567"
  },
  {
    id: 18,
    pic: "/images/pic19.jfif",
    Model: "Yamaha R3 Replica",
    Price: "Rs:390,000/-",
    
    EngineDis: " 1000 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "18 Litre",
    SellerCellNo: "0315-1234567"


  },
  {
    id: 19,
    pic: "/images/pic20.jfif",
    Model: "Suzuki GSX-R",
    Price: "Rs:890,000/-",
    
    EngineDis: " 400 CC Double Cylinder",
    MaxPower: "47.5 Hp",
    TyresSize: "160/70-17 120/70-17",
    Brakes: "ABS Disk Breaks",
    FuelSyestem: "Electrical Fuel Injection (EFI)",
    MaxSpeed: "200 Km/H",
    Condition: "Used",
    FuelCapacity: "15 Litre",
    SellerCellNo: "0315-1234567"

  },
  
];
class App extends React.Component {


  constructor() {
    super();

    this.readFromFirebase()

    
    this.state = {
      data: "",
      listitems:listitems,
      imgUrls:[]
    }
  }

  newBike = (obj) => {
    // alert()
    let newBike = obj;
     
    const newArry = [...this.state.listitems];
    newBike.id = this.state.listitems.length;
        newArry.push(newBike)
    this.setState({
      listitems: newArry
    },  ()=>{
    this.writeInFirebase()
  },
    
  
    )
  }

  setNewBike=(obj)=>{

    // this.state.data=obj;
    this.newBike(obj);
    // console.log(obj);

  }
  writeInFirebase=()=>{
    firebase.database().ref('data2').set(this.state.listitems);
  }
  
  readFromFirebase=()=>{
  
    firebase.database().ref('data2').on('value',(snapshot)=> {
      this.setState(
        {
          listitems:snapshot.val()  
        },console.log(snapshot.val(),"firebase")
      )
    })
  }
  
  render() {
    console.log(this.state.listitems,"inADDBikemethod")
    
   
    return (<div>
      <BrowserRouter>
            
        <div>
          <Switch>
            <Route path="/" exact render={props=><Home {...props}  listitems={this.state.listitems} />} />
            <Route path="/about" component={AboutUs} />
            <Route path="/showroom" component={Showroom} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/showroom" component={Showroom} />
            <Route path="/login" component={LoginForm} />
            <Route path="/signup" component={SigninForm} />
            <Route path="/addbike" render={props=><Bikeinfo {...props} setNewBike={this.setNewBike}/>} />

          </Switch>

        </div>
        
      </BrowserRouter>
      </div>
    )
  }
}
export {
  storage , App as default
}

