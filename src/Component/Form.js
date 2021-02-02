import React from 'react';
function Form(props) {
 return (
   <React.Fragment>
    <form onSubmit={props.getwether}>
         <input type="text" name="city" placeholder="city..."/>
         <input type="text" name="country" placeholder="country..."/>
         <button>Click</button>
    </form>
   </React.Fragment>
    
  );
}

export default Form;
