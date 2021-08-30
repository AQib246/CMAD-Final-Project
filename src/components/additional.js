import React , {Component} from 'react';
import "../components/Styling/Additional.css";
import QualityLevel from "../images/QualityLevel.png";
import Reliability from "../images/Reliaility.png";
import Spare_parts from "../images/SparePrarts.png";
import newsletter from "../images/newsletter.jpg";

const Additional   = () => {

    return(
        <div>
                <div className="facts">
        <div class="container">
            <div class="row">
              <div class="col-sm additional_sec_img_card" >
                  <img  src = {QualityLevel} alt="quality" className = "additional_sec_img" />
                  <p className="textf">Quality Level 100 %</p>
              </div>
              <div class="col-sm additional_sec_img_card">
                <img src = {Reliability} alt="reliable" className = "additional_sec_img" />
                <p className="textf">Reliability</p>
              </div>
              <div class="col-sm additional_sec_img_card">
                <img src = {Spare_parts} alt="" className = "additional_sec_img" />
                <p className ="textf">Genuine Spare Parts</p>
              </div>
            </div>
          </div>
    </div>


    <div className ="order flex">
        <div className ="margin">
        <p id="OrderN">Order Now</p>
        <p>Order now in other cities also Islamabad, Karachi , Multan , & Gujranwala with in 24 hours of Order confirmation Please call us further Assistance.</p>
        <div  className ="col1 line"></div>
        </div>
    </div>



    <div className ="newsletter flex" style = {{
      backgroundImage: `url(${newsletter})`,
      opacity:"0.8 black",
      backgroundRepeat:"no-repeat" , 
      backgroundSize:"cover" , 
      padding:"5rem 0" , 
      backgroundPositionY:"center"}}>
  
        <div className="margin news">
            <p className="newshead">Newsletter</p>
            <div className="line"></div><br/>
            <p>For further updates please Subscribe us</p>
            <input type="email" name="email" id="email" placeholder="Enter your email" />
            <input  id="button" type="submit" value="Subscribe"/>
        </div>
    </div>

    
        </div>
    )
}

export default Additional