import React from "react";
import './Button.scss'

function Button({props}) {
  return (
    <div className="container">
      <Button className="Btn-component">{props.text}</Button>
    </div>
  );
}

export default Button;
