import React from 'react';
import DragResizeBox from "../../Components/DragResizeBox/DragResizeBox"
import ImageAndDataForm from '../../Components/ImageAndDataForm/ImageAndDataForm';
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="alert alert-primary p-3 text-center">
                <div className="container">
                    <h1>The Thousand Ether Homepage</h1>
                    <h5>1,000,000 pixels · 0.001 ETH per pixel · Own a piece of blockchain history!</h5>
                </div>
            </div>

            <div className="drag-resize-container mb-2">
                <DragResizeBox />
            </div>


            <div className="container">
                <ImageAndDataForm/>
            </div>

            <div className="container">
                <button className="btn btn-primary">
                    152300 pixels sold <button>Buy pixels</button>{" "}
                </button>

                <div className="">
                    <p>
                        Ads displayed above are loaded directly from the Ethereum Blockchain. This Decentralized Application (DApp) does not have a traditional backend. No MVC framework, no SQL database. It's just a JavaScript application served statically from Github which speaks to the Ethereum blockchain using{" "}
                        <a href="#" className="text-success">
                            Web3.js.
                        </a>{" "}
                        Pretty cool, right?
                    </p>
                </div>
            </div>

            <footer className="alert-dark">
                <div className="container">
                    <div className="row row-cols-sm-1 row-cols-md-3">
                        <div className="p-3 alert-dark">
                            <h5>Author</h5>
                            <a href="#" className="d-block text-dark">
                                shazow
                            </a>
                            <a href="#" className="d-block text-dark">
                                mveytsman
                            </a>
                        </div>
                        <div className="p-3 alert-dark">
                            <h5>Project</h5>
                            <a href="#" className="d-block text-dark">
                                FAQ
                            </a>
                            <a href="#" className="d-block text-dark">
                                Press
                            </a>
                            <a href="#" className="d-block text-dark">
                                Source code
                            </a>
                        </div>
                        <div className="p-3 alert-dark">
                            <h5>Blockchain</h5>
                            <a href="#" className="d-block text-dark">
                                Main
                            </a>
                            <a href="#" className="d-block text-dark">
                                Contract on Etherscan
                            </a>
                            <a href="#" className="d-block text-dark">
                                List View
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;