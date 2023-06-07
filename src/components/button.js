import React from 'react';


function Button({ text, clickButton,manejarClick }) {

return (

<button  

className={ clickButton? 'button-click' : 'button-reset' }
onClick= { manejarClick }> 
{text}
</button>

)

 }

 export default Button;