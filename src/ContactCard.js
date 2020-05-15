import React from 'react';

function ContactCard(props) {
    console.log(props)
    return ( 
        <div className="contact-card">
            <img src={props.contact.img}/>
            <h3>{props.contact.name}</h3>
            <p> Phone:{props.contact.Phone}</p>
            <p>Email: {props.contact.Email}  </p>


        </div>


    )

}
export default ContactCard