import React, { Component } from 'react'
import { Router, Switch, Route, Link, useHistory } from "react-router-dom";
import "../App.css";
function Subscription() { 
    return(
<div className="box">
	<div class="container_subs log-font">

	<div class="centre-content">
		{/* <h1 class="price">2499<span>/-</span></h1> */}
		<h1 class="course">
		Subscribe For More!
		</h1>
	</div>
  <form>
	<div class="card-details">
		<p >Pay using Credit or Debit card</p>

		<div class="card-number">
		<label> Card Number </label>
		<input required
			type="text"
			class="card-number-field"
			placeholder="###-###-###"/>
		</div>
		<br />
		<div class="date-number">
		<label> Expiry Date </label>
		<input required type="text" class="date-number-field"
				placeholder="DD-MM-YY" />
		</div>

		<div class="cvv-number">
		<label> CVV number </label>
		<input required type="text" class="cvv-number-field"
				placeholder="xxx" />
		</div>
		<div class="nameholder-number">
		<label> Card Holder name </label>
		<input required
			type="text"
			class="card-name-field"
			placeholder="Enter your Name"/>
		</div>
    <Link to={"/paymentsuccessful"} className="nav-link nav_buttons">
    <button type="submit"
				class="submit-now-btn">
		submit
		</button>
                  </Link>
                 
		
	</div>
  </form>
	</div>
  </div>


        );
    

    


}

export default Subscription;