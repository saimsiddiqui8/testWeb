import React, { useState } from "react";
import "./HeroSection.css";
import main from "../../../public/main.png"

const HeroSection = () => {
    const [selectedBtn, setSelectedBtn] = useState(null);

    const handleButtonClick = (btnIndex) => {
      setSelectedBtn(btnIndex);
    };
    return (
        <>
            <section className="container">
                <h1 className="heading mt-5 pt-5 pb-3">Industrial Fund</h1>
            </section>
            <main id="main" className="container ">
                <div className="container w-75">
                    <div className="row">
                        <div className="col">
                            <div className="m-4 text-center">
                                <img src={main} alt="" id="rowImage" />
                            </div>
                        </div>
                        <div className="col mt-4 customBox mb-4 rounded">
                            <div className="my-3">
                            <button
                  className={`customBtn w-100 py-3 ${
                    selectedBtn === 1 ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick(1)}
                >
                  description
                </button>{" "}
                <br />
                <button
                  className={`customBtn w-100 py-3 ${
                    selectedBtn === 2 ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick(2)}
                >
                  description
                </button>
                <br />
                <button
                  className={`customBtn w-100 py-3 ${
                    selectedBtn === 3 ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick(3)}
                >
                  description
                </button>
                <br />
                <button
                  className={`customBtn w-100 py-3 ${
                    selectedBtn === 4 ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick(4)}
                >
                  description
                </button>
                <button
                  className={`customBtn w-100 py-3 ${
                    selectedBtn === 5 ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick(5)}
                >
                  description
                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HeroSection