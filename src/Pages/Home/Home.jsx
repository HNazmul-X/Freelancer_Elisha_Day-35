import React from 'react';
import DragResizeBox from "../../Components/DragResizeBox/DragResizeBox"
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div className="alert alert-primary p-3 text-center">
                <div className="container">
                    <h1>The Thousand Ether Homepage</h1>
                    <h5>1,000,000 pixels · 0.001 ETH per pixel · Own a piece of blockchain history!</h5>
                </div>
            </div>

            <div className="drag-resize-container mb-5">
                <DragResizeBox />
            </div>
        </div>
    );
};

export default Home;