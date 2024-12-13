import React, {useState} from 'react';
import Header from "./HomeHeader"
import Tabs from "./Tabs";
import About from "./About"
import Footer from "./Footer";


function HomePage() {
    const [activeTab, setActiveTab] = useState("О нас");

    const tabs = ["О нас", "Блаблабла"];
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <Header/>
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange}/>
            <About activeTab={activeTab}/>
            <Footer/>
        </div>
    );

}

export default HomePage;