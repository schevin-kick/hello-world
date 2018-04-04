import React from 'react';
import '../../styles/menu.scss';
import { Tabs, Tab } from 'material-ui/Tabs';

const Menu = () => {
    return (
        <div>
            <Tabs>
                <Tab label="Item One">
                    <div>
                        <p>This is paragraph for item 1 </p>
                    </div>
                </Tab>
                <Tab label="Item Two">
                    <div>
                        <p>This is paragraph for item 2 </p>
                    </div>
                </Tab>
                <Tab label="Item Three">
                    <div>
                        <p>This is paragraph for item 3 </p>
                    </div>
                </Tab>
                <Tab label="Item Four">
                    <div>
                        <p>This is paragraph for item 4 </p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default Menu;