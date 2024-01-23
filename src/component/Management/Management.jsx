import React from "react";
import "./Management.css";
import main from "../../../public/main.png"
import AppButton from "../../reusable/AppButton/AppButton";
import bottomImg from "../../../public/bottomImg.png"

const Management = () => {
    return (
        <>
            <section>
                <div className="my-5 pt-4 pb-3">
                    <h1 className="detailsHeading">Manag<span>ement</span></h1>
                </div>
            </section>

            <main className="container w-75">
                <table>
                    <tbody>
                        <tr>

                            <td>John Doe</td>
                            <td className="text-end">$70,000</td>
                        </tr>
                        <tr>

                            <td>Jane Smith</td>
                            <td className="text-end">$60,000</td>
                        </tr>
                        <tr>

                            <td>Mike Johnson</td>
                            <td className="text-end">$80,000</td>
                        </tr>
                        <tr>

                            <td>Mike Johnson</td>
                            <td className="text-end">$80,000</td>
                        </tr>
                        <tr>

                            <td>Mike Johnson</td>
                            <td className="text-end">$80,000</td>
                        </tr>
                        <tr>

                            <td>Mike Johnson</td>
                            <td className="text-end">$80,000</td>
                        </tr>
                        <tr>

                            <td>Mike Johnson</td>
                            <td className="text-end">$80,000</td>
                        </tr>
                        <tr>

                            <td>Mike Johnson</td>
                            <td className="text-end">$80,000</td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <div className="text-center my-5">
                <AppButton label="Meet Our Team" />
            </div>
            <div className="text-center mb-5">
                <img src={bottomImg} className="w-75" alt="" />
            </div>
            <footer>
                <h2 className="text-center  py-5">Logo Here</h2>
                <div className="container mb-5 w-50">
                    <div className="d-flex flex-row justify-content-evenly">
                        <span>Featured</span>
                        <span>Pricing</span>
                        <span>Listing</span>
                    </div>
                </div>
                <hr />
                <p className="text-center pb-3">© 2023 sponsor-list.vercel.app</p>
            </footer>
        </>
    );
};

export default Management;