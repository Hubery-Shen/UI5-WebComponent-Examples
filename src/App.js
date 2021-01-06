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
import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/Popover";
import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout";
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents-fiori/dist/ShellBarItem";
import "@ui5/webcomponents/dist/StandardListItem";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Avatar";
import "@ui5/webcomponents/dist/RatingIndicator";
import "@ui5/webcomponents/dist/TabSeparator";

// Import CSS
import "./App.css";

function App() {
    const popoverRef = React.createRef();
    const popoverBtn = React.createRef();
    const col1listRef = React.createRef();
    const closeBtnRef =  React.createRef();
    const fclRef = React.createRef();
    useEffect(() => {
        popoverBtn.current.addEventListener('click',function (e){
            popoverRef.current.openBy(popoverBtn.current);
        });
        closeBtnRef.current.addEventListener('click',function (e){
            popoverRef.current.close();
        });
        col1listRef.current.addEventListener("item-click", function (e) {
            fclRef.current.layout = "TwoColumnsMidExpanded";
        });
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
                    <ui5-button id="closePopoverButton" ref={closeBtnRef} design="Emphasized">Subscribe</ui5-button>
                </div>
            </ui5-popover>
            <h2>For: https://github.com/SAP/ui5-webcomponents/issues/2631 ( not fixed )</h2>
            <ui5-flexible-column-layout id="fcl" ref={fclRef} style={{height: "600px"}}
                                        accessibilityTexts={{
                                            startArrowLeftText: 'startArrowLeftText1',
                                            startArrowRightText: 'startArrowRightText1',
                                            endArrowLeftText: 'endArrowLeftText1',
                                            endArrowRightText: 'endArrowRightText1'
                                        }}>
                <div className="col" slot="startColumn">
                    <ui5-shellbar
                        primary-title="Smart Store, New Yorks"
                        notification-count="4"
                        show-notifications=""
                        show-product-switch=""
                        show-co-pilot=""
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" slot="logo"/>
                        <ui5-shellbar-item icon="disconnected" text="Disconnect"></ui5-shellbar-item>
                        <ui5-shellbar-item icon="incoming-call" text="Incoming Calls"></ui5-shellbar-item>
                    </ui5-shellbar>

                    <br/>
                    <br/>
                    <ui5-list id="col1list" ref={col1listRef} header-text="Products (13)" mode="SingleSelect">
                        <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end="" info="47.00 EUR">
                            10 inch Portable DVD
                        </ui5-li>
                        <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end="" info="249.00 EUR">
                            7 inch WidescreenPortable DVD Player w MP3
                        </ui5-li>
                        <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end="" info="947.00 EUR">
                            Astro Laptop 1516
                        </ui5-li>
                        <ui5-li description="HT-1251" icon="slim-arrow-right" icon-end="" info="647.00 EUR">
                            Astro Phone 6
                        </ui5-li>
                        <ui5-li description="HT-1252" icon="slim-arrow-right" icon-end="" info="27.99 EUR">
                            Audio/Video Cable Kit - 4m
                        </ui5-li>
                        <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end="" info="447.90 EUR">
                            Beam Breaker B-1
                        </ui5-li>
                        <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end="" info="647.50 EUR">
                            Beam Breaker B-2
                        </ui5-li>
                        <ui5-li description="HT-6001" icon="slim-arrow-right" icon-end="" info="847.80 EUR">
                            Beam Breaker B-3
                        </ui5-li>
                        <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end="" info="1,250.00 EUR">
                            Beam Breaker B-4
                        </ui5-li>
                        <ui5-li description="HT-8001" icon="slim-arrow-right" icon-end="" info="1,288.00 EUR">
                            Camcorder View
                        </ui5-li>
                        <ui5-li description="HT-2001" icon="slim-arrow-right" icon-end="" info="996.00 EUR">
                            Benda Laptop 1408
                        </ui5-li>
                        <ui5-li description="HT-0003" icon="slim-arrow-right" icon-end="" info="147.00 EUR">
                            Cepat Tablet 10.5
                        </ui5-li>
                        <ui5-li description="HT-1001" icon="slim-arrow-right" icon-end="" info="87.90 EUR">
                            Gladiator MX
                        </ui5-li>
                    </ui5-list>
                </div>

                <div className="col" slot="midColumn">
                    <div className="colHeader">
                        <ui5-title id="col2title" level="H2" style={{minWidth: "1px"}}></ui5-title>

                        <div className="colSubHeader">
                            <ui5-button design="Emphasized">Edit</ui5-button>
                            <ui5-button design="Transparent" icon="add"></ui5-button>
                            <ui5-button id="fullscreenMidColumn" design="Transparent" icon="full-screen"></ui5-button>
                            <ui5-button id="closeMidColumn" icon="decline" design="Transparent"></ui5-button>
                        </div>
                    </div>
                    <br/>

                    <section style={{padding: "1rem 1rem"}}>
                        <ui5-title level="H3">General Information</ui5-title>
                        <br/>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                            }}
                        >
                            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <ui5-avatar
                                    id="avatar"
                                    icon="laptop"
                                    background-color="Accent5"
                                    size="XL"
                                    style={{margin: "0 1rem", minWidth: "7rem"}}
                                >
                                    {" "}
                                </ui5-avatar>

                                <div>
                                    <div className="productInfo">
                                        <ui5-title level="H5">Product:</ui5-title>
                                        <ui5-title level="H5" id="lblName"></ui5-title>
                                    </div>
                                    <br/>

                                    <div className="productInfo">
                                        <ui5-title level="H5">Description:</ui5-title>
                                        <ui5-title level="H5" id="lblDesc"></ui5-title>
                                    </div>
                                    <br/>

                                    <div className="productInfo">
                                        <ui5-title level="H5">Supplier:</ui5-title>
                                        <ui5-title level="H5" id="lblSupplier">
                                            <b>Titanium</b>
                                        </ui5-title>
                                    </div>
                                </div>
                            </div>

                            <div className="productInfo" style={{alignSelf: "start"}}>
                                <ui5-title level="H5">Rating:</ui5-title>
                                <ui5-rating-indicator id="productRating" aria-label="Hello World"
                                                      value="3.5"></ui5-rating-indicator>
                            </div>

                            <span></span>
                        </div>

                        <br/>
                        <br/>
                        <br/>

                        <ui5-title level="H3">Suppliers</ui5-title>
                        <br/>
                        <ui5-list id="col2list">
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                Titanium
                            </ui5-li>
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                Technocom
                            </ui5-li>
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                {" "}
                                Red Point Stores
                            </ui5-li>
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                {" "}
                                Very Best Screens
                            </ui5-li>
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                Smartcards
                            </ui5-li>
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                Alpha Printers
                            </ui5-li>
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                Printer for All
                            </ui5-li>
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                Oxynum
                            </ui5-li>
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                Fasttech
                            </ui5-li>
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                Ultrasonic United
                            </ui5-li>
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                Speaker Experts
                            </ui5-li>
                            <ui5-li icon="slim-arrow-right" icon-end="">
                                Brainsoft
                            </ui5-li>
                        </ui5-list>
                    </section>
                </div>

                <div className="col" slot="endColumn">
                    <div className="colHeader">
                        <ui5-title id="col3title" style={{minWidth: "1px"}}></ui5-title>

                        <div className="colSubHeader">
                            <ui5-button design="Emphasized">Edit</ui5-button>
                            <ui5-button design="Transparent" icon="add"></ui5-button>
                            <ui5-button id="fullscreenEndColumn" design="Transparent" icon="full-screen"></ui5-button>
                            <ui5-button id="closeEndColumn" icon="decline" design="Transparent"></ui5-button>
                        </div>
                    </div>
                    <br/>
                    <br/>

                    <ui5-tabcontainer id="tabContainer1" fixed="" collapsed="" show-overflow="">
                        <ui5-tab text="Products" additional-text="125">
                            {" "}
                        </ui5-tab>
                        <ui5-tab-separator></ui5-tab-separator>
                        <ui5-tab icon="sap-icon://menu2" text="Laptops" semantic-color="Positive" additional-text="25">
                            {" "}
                        </ui5-tab>
                        <ui5-tab
                            icon="sap-icon://menu"
                            text="Monitors"
                            selected=""
                            semantic-color="Critical"
                            additional-text="45"
                        >
                            {" "}
                        </ui5-tab>
                        <ui5-tab icon="sap-icon://menu2" text="Keyboards" semantic-color="Negative"
                                 additional-text="15">
                            {" "}
                        </ui5-tab>
                        <ui5-tab
                            icon="sap-icon://menu2"
                            disabled=""
                            text="Disabled"
                            semantic-color="Negative"
                            additional-text="40"
                        >
                            {" "}
                        </ui5-tab>
                        <ui5-tab icon="sap-icon://menu2" text="Neutral" semantic-color="Neutral" additional-text="40">
                            {" "}
                        </ui5-tab>
                        <ui5-tab icon="sap-icon://menu2" text="Default" additional-text="40">
                            {" "}
                        </ui5-tab>
                    </ui5-tabcontainer>

                    <section style={{padding: "1rem 1rem", background: "var(--sapList_Background)"}}>
                        <p>
                            <ui5-title level="H5" wrap="">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui
                                officia deserunt mollit anim id est laborum.
                            </ui5-title>
                        </p>
                        <p>
                            <ui5-title level="H5" wrap="">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui
                                officia deserunt mollit anim id est laborum.
                            </ui5-title>
                        </p>
                        <p>
                            <ui5-title level="H5" wrap="">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui
                                officia deserunt mollit anim id est laborum.
                            </ui5-title>
                        </p>
                    </section>
                </div>
            </ui5-flexible-column-layout>
        </div>
    );
}

export default App;
