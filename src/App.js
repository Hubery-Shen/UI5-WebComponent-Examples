// Import React Framework
import React from "react";

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

// Import CSS
import "./App.css";

function App() {
    return (
        <div className="App">
            <h2>For: https://github.com/SAP/ui5-webcomponents/issues/2185 ( fixed )</h2>
            <ui5-tabcontainer className="full-width" collapsed fixed show-overflow>
                <ui5-tab text="Home"/>
                <ui5-tab text="What's new" selected/>
                <ui5-tab text="Who are we"/>
                <ui5-tab text="About"/>
                <ui5-tab text="Contacts"/>
            </ui5-tabcontainer>
            <h2>For: https://github.com/SAP/ui5-webcomponents/issues/2191 ( not fixed )</h2>
            <ui5-panel width="100%" accessible-role="Complementary"
                       header-text="Both expandable and expanded" className="full-width">
                <h1>Panel RTL test</h1>
            </ui5-panel>
            <h2>For: https://github.com/SAP/ui5-webcomponents/issues/2393 ( not fixed )</h2>
            <ui5-button design="Transparent" icon="message-information" title="Go down"/>
        </div>
    );
}

export default App;
