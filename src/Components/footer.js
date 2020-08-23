import React from 'react';

const Footer = () => {
        return (
            <div style = {styles.nav}>
               <div>
                <h3 style = {{color:'white'}}>About us</h3>
               
               </div>
               <div>
                   <h3 style={{color:'white'}}>Customer Care</h3>
                   </div>
<div>
    <h3 style = {{color:'white'}}>Contact us</h3>
</div>
<div>
    <h4 style={{color:'white'}}>Subscribe for new member ship</h4>
</div>
            </div>
        )

}


const styles = {
    
    nav : {
        height : 200,
        background : 'black',
        display : 'flex',
        justifyContent : 'space-around',
        alignItems : 'center',
        margin:'10000',

    },
   
}

export default Footer;
