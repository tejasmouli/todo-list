import React from 'react';
import './Done.css';

const Done = props => {
    const [checked,setChecked] = React.useState(props.checked?true:false);
    const toggle = () => {
        setChecked(!checked);
        props.markDone();
    }
  
  return (
      <div className={checked?"box checked":"box"} onClick={toggle}></div>
    )
  };

  export default Done;