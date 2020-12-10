import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import '../Css/TabsNav.css';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';


class TabComponent extends Component {
    state = { 
        tabIndex: 0
    }
    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex}
                    onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}><TabDoor /><p><strong>No commitments</strong></p><p style={{ lineHeight: '1rem' }}><strong>Cancel online at anytime</strong></p></Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}><TabDevices /><p style={{ marginTop: '-5.3125rem' }}><strong>Watch Anywhere</strong></p></Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}><TabPrices /><p><strong>Pick your price</strong></p></Tab>
                    </TabList>
                    {/* Tabs Content */}
                    <TabPanel>
                        <TabContentOne/>
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo/>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
export default TabComponent; 
