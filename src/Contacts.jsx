import React from "react";
import Header from "./Components/Header";
import { NavLink, useNavigate } from "react-router-dom";

const Contacts = () => {
   const navigate = useNavigate();
   const BackHome = () => {
      navigate('/')
   }



   return (
      <div className="contactss">
         <div className="conatct_header"><Header/></div>
         <div className="Contact ">
            <h2 className="contact-h2 text-3xl font-bold">Don't be shy</h2>
            <h1 className=" text-7xl font-bold py-4">Drop Me a Line</h1>
            <div className="Contact-box">
               <div className="Form">
                  <form action="#" method="post" id="register1">
                     <div class="input-group">
                        <input type="text" placeholder="Name" name="fullname" id="name" />
                        <span id="errormessagefullname"></span>
                     </div>
                     <div class="input-group">
                        <input type="text" placeholder="E-mail" name="email" />
                        <span id="errormessageemail"></span>
                     </div>
                     <div class="input-group">
                        <textarea name="message" cols="30" rows="10" id="Textarea" maxlength="2000" placeholder="Message"></textarea>

                     </div>
                     <div class="input-group">
                        <input type="submit" value="Submit Message" />
                     </div>

                  </form>
               </div>
               <div className="contacts_items">
                  <div className="contact-items-part1">
                     <div className="contact-items-part1-left">
                        <img src="src\images\location.png" alt="" />
                     </div>
                     <div className="contact-items-part1-right">
                        <div className=" text-4xl font-bold">Address</div>
                        <div className="text-blue text-2xl font-bold">Chak 49NB Sargodha,Pakistan</div>
                     </div>
                  </div>
                  <div className="contact-items-part1">
                     <div className="contact-items-part1-left">
                        <img src="src\images\mial.png" alt="" />
                     </div>
                     <div className="contact-items-part1-right">
                        <div className=" text-4xl font-bold">Email</div>
                        <div className="text-blue text-2xl font-bold">basitkhokhar957@gmail.com</div>
                     </div>
                  </div>
                  <div className="contact-items-part1">
                     <div className="contact-items-part1-left">
                        <img src="src\images\phone (1).png" alt="" />
                     </div>
                     <div className="contact-items-part1-right">
                        <div className=" text-4xl font-bold">Phone</div>
                        <div className="text-blue text-2xl font-bold">03060760549</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Contacts;