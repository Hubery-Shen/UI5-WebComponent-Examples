// Import React Framework
import React, {useEffect} from "react";

// Import UI5 libs
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "@ui5/webcomponents-base/dist/features/browsersupport/IE11WithWebComponentsPolyfill.js";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-icons/dist/Assets.js";

// Import Tested Component
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab";
import "@ui5/webcomponents/dist/Panel";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Popover";

// Import CSS
import "./App.css";

function App() {
    const popoverRef = React.createRef();
    const popoverBtn = React.createRef();
    useEffect(() => {
        popoverRef.current.openBy(popoverBtn.current);
    }, [])
    return (
        <div className="App">
            <h2>For: https://github.com/SAP/ui5-webcomponents/issues/2626 ( not fixed )</h2>
            <div>
                <ui5-button design="Emphasized">TEST</ui5-button>
            </div>
            <div>
                <ui5-button design="Emphasized">TEST</ui5-button>
            </div>
            <div>
                <ui5-button design="Emphasized">TEST</ui5-button>
            </div>
            <div>
                <ui5-button ref={popoverBtn} design="Emphasized">Open Popover</ui5-button>
            </div>
            <ui5-popover ref={popoverRef} modal={true} id="hello-popover" header-text="Newsletter subscription">
                <div className="popover-content">
                    popover-content
                </div>
                <div slot="footer" className="popover-footer">
                    <div style={{flex: '1'}}/>
                    <ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
                </div>
            </ui5-popover>
        </div>
    );
}

export default App;
