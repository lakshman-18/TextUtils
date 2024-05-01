import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>

  )
}

export default Alert

// import React from 'react';

// const Alert = ({ alert }) => {
//   return (
//     alert && (
//       <div className={`alert alert-${alert.type}`} role="alert">
//         {alert.msg}
//       </div>
//     )
//   );
// };

// export default Alert;
