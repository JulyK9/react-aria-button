import React from 'react';
import './style.css';
import { useRef } from 'react';
import { useButton } from '@react-aria/button';

function Button(props) {
  let ref = useRef();
  let { buttonProps, isPressed } = useButton(props, ref);
  // let buttonProps = useButton(props, ref);
  // console.log('ref: ', ref);
  // console.log('buttonProps: ', buttonProps);
  console.log('buttonProps: ', buttonProps);
  console.log('isPressed: ', isPressed);

  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
}

export default function App() {
  return (
    <>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <Button onClick={() => alert('Button pressed')}>Press me</Button>
    </>
  );
}
