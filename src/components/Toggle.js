import React, { useState } from "react";

function Toggle() {

  const [onButton, setOnButton] = useState(false)

  function handleClick() {
    setOnButton(!onButton)
  }

  const color = onButton ? "green" : "red";

  return <button style={{background : color}} onClick={handleClick}>{onButton ? "on" : "off"}</button>;
}

export default Toggle;
