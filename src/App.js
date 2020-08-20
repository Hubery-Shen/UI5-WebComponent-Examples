// Import React Framework
import React, { useEffect, useRef } from "react";

// Import UI5 libs
import "react-app-polyfill/stable";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-icons/dist/Assets.js";

// Import Tested Component
import "@ui5/webcomponents/dist/Popover.js";

// Import CSS
import "./App.css";

function App() {
  const targetRef = useRef(null);
  const popoverRef = useRef(null);
  useEffect(() => {
    popoverRef.current && popoverRef.current.openBy(targetRef.current);
  }, []);
  return (
      <div className="App">
        <div ref={targetRef} id="target" style={{ width: "100%", height: "100px", background: "lightblue" }} />
        <div className="snippet">
          <ui5-popover ref={popoverRef} horizontal-align="Left" id="hello-popover" header-text="Newsletter subscription">
            <div className="popover-content">
              <div className="flex-column">
                <ui5-label htmlFor="emailInput">Email:</ui5-label>
                <ui5-input id="emailInput" className="samples-margin-top" placeholder="Enter Email" />
              </div>
            </div>
            <div slot="footer" className="popover-footer">
              <div style={{ flex: 1 }} />
              <ui5-button id="closePopoverButton" design="Emphasized">
                Subscribe
              </ui5-button>
            </div>
          </ui5-popover>
        </div>
      </div>
  );
}

export default App;
