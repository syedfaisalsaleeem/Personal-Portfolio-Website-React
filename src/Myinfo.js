import React from 'react'
import Footer from './Footer.js'
import Navbar from './Navbar.js'
import MainContent from './MainContent.js'
import ContactCard from './ContactCard.js';

function MyApp() {
    let count=1;
    let react1;
    const styles ={
    color:"yellow",
    backgroundColor:"black",
    fontSize:"25px"

}
    if(count==1)
    { count=2;
    styles.color="red"
    react1="hello"}
    else{
    react1="good"
    }
 return (
<div className='container1'>
    <h1 style={styles}> faisal {react1}</h1>
    <ContactCard contact={{
            img:"./logo.svg",            
            name:"Mr.Whiskerson",
            Phone:"(210)",
            Email:"mt.123@gmail.com" 
    }}
    />

    <Navbar/>
    <MainContent />
    <Footer />    

</div>
)
}

export default MyApp