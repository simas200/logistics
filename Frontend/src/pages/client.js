import React from "react";

const Client = () => {
    return (
	<div>
	    <h1>Client name</h1>
	    <form onSubmit={printSuccess} method="post">
		<label>First Name:
		    <input id="fname" type="text" name="fname" />
		</label>
		<label>Last Name:
		    <input id="lname" type="text" name="lname" required />
		</label>
		<br />
		<label>Address:
		    <input id="address1" type="text" name="address1" required />
		</label>
		<label>Address 2:
		    <input id="address2" type="text" name="address2" />
		</label>
		<label>Address 3:
		    <input id="address3" type="text" name="address3" />
		</label>
		<br />
		<label>Post Code:
		    <input id="postCode" type="text" name="postCode" required />
		</label>
		<label>City:
		    <input id="city" type="text" name="city" required />
		</label>
		<label>Country:
		    <input id="country" type="text" name="country" required />
		</label>
		<br />
		<label>E-mail:
		    <input id="email" type="email" name="email" required />
		</label>
		<label>Phone:
		    <input id="phone" type="tel" name="phone" />
		</label>
		<br />
		<input type="submit" value="Submit" />
	    </form>
	</div>
    );
};

function printSuccess(e){
    e.preventDefault();
    console.log("Success!!!");

    const form = e.target;
    const formData = new FormData(form);
    
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
}

export default Client;
