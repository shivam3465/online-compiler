import React, { useState } from "react";
import "./home.scss";

export default function Home() {
  const [size,setSize]=useState(16);
  const [lang,setLang]=useState("");
  const sizeArr=[10,12,14,16,18,20,22,24,26,28,30];

  const text = `
  this is my code
  so this is how it is working got it or not
  `;
  return (
    <div className="home">
      <div id="heading">
        <h1>Code, Compile & Run</h1>
        <div id="heading-desc">
          Compile an Run your code with this online IDE.We support multiple
          programming languages like C, C++, Python , Java and many more
        </div>
        
        <div id="editor-container">
          <div className="top">
            <select name="language" className="select" id="language" onChange={(e)=>setLang(e.target.value)}>
              <option value="none">Select Language</option>
              <option value="c" >C</option>
              <option value="cpp">C++</option>
              <option value="py">Python</option>
              <option value="java">Java</option>
            </select>
            <div className="top-left">
              Text Size:
              <select name="font-size" id="font-size" className="select" onChange={(e)=>setSize(e.target.value)} defaultValue={16}>
                {
                  sizeArr.map((item,i)=>{
                    return <option value={item} key={i}>{item}</option>                    
                  })
                }                
              </select>
            </div>
          </div>

          <div id="editor">
            <textarea
              name="code"
              id="code-editor"              
              style={{
                fontSize: `${size}px`
              }}             
            ></textarea>
            <button className="btn">Run Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}
