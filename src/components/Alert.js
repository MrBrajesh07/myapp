// import React from "react";

// function Alert(props){
//     return(
//         <div>
//            props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
// {props.alert.type} : {props.alert.mssg}
//   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>
//         </div>
//     )

// }

// export default Alert;
import React from "react";

function Alert(props) {
  return (
    <div>
      {props.alert && ( // Check if props.alert is truthy before rendering
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{color:props.mode === 'light'?'red':'white'}} >
          {props.alert.type} : {props.alert.mssg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    </div>
  );
}

export default Alert;
