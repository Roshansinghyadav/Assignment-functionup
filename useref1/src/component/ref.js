/*import {useRef} from "react"

export function Button(){
    let inputRef = useRef()
     function handleEvent(){
        inputRef.current.click()
     }
     return
     <div>
<input type="file" ref ={inputRef}/>
<button onClick={handleEvent}>Choose the file</button>
     </div>
}*/
import React, { useRef } from 'react';

export function MyComponent() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input type="file" style={{ display: 'none' }} ref={fileInputRef} />
      <button onClick={handleButtonClick}>Choose a file</button>
    </div>
  );
}