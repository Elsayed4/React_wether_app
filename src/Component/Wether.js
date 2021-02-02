import React from 'react';
function Wether(props) {
 return (
   <React.Fragment>
   {props.temp && <p>temp : {props.temp}</p>}
    { props.city && <p>city: {props.city}</p>}
    {props.country && <p>country: {props.country}</p> }
     {props.humidity && <p>humidity: {props.humidity}</p>}
     { props.description && <p>description: {props.description}</p>}
     { props.error && <p>{props.error}</p>}
   </React.Fragment>
    
  );
}

export default Wether;
