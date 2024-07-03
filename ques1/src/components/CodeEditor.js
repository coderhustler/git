import React, { useState } from "react";

function CodeEditor() {
  const [code, setCode] = useState(
    '// Online Javascript Editor for free\n// Write, Edit and Run your Javascript code using JS Online Compiler\n\nconsole.log("Try programiz.pro");\n\nI need to adjust the icons and improve the UI. Please give me some more time SIR'
  );

  return (
    <div className="code-editor">
      <div className="tabs">
        <div className="tab">icon</div>
        <div className="tab">icon</div>
        <div className="tab">icon</div>
        <div className="tab">icon</div>
        <div className="tab">icon</div>
        <div className="tab">icon</div>
        <div className="tab">icon</div>
        <div className="tab">icon</div>
        <div className="tab">icon</div>
        <div className="tab">icon</div>
        <div className="tab">icon</div>
        <div className="tab">icon</div>
      </div>

      <div className="mainarea">
        <div className="uppermain">
          <div className="mainjs">main.js</div>
          <button className="run-button">icon</button>
          <button className="run-button">icon</button>
          <button className="run-button">Run</button>
        </div>
        <textarea
          className="editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className="output">
        <div className="output-text">Output</div>
      </div>
    </div>
  );
}

export default CodeEditor;
