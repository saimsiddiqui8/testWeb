import React from "react";
import "./DetailSection.css";
import main from "../../../public/main.png"

const DetailSection = () => {
    return (
        <>
            <section>
                <div className="my-5 pt-4 pb-3">
                    <h1 className="detailsHeading">Details At <span>A Glance</span></h1>
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
            <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="my-5 container" width="1171" height="222" viewBox="0 0 1171 222" fill="none">

                    <path d="M499 1H1158.5C1165.13 1 1170.5 6.37258 1170.5 13V209.5C1170.5 216.127 1165.13 221.5 1158.5 221.5H0" stroke="black" stroke-width="0.3" />
                    <rect x="491" y="0" width="15" height="15" fill="#9e509b" />

                    <text x="50%" y="35%" dominant-baseline="middle" id="headingDetails" text-anchor="middle" fill="black">
                        Description
                    </text>
                    <text x="50%" y="55%" dominant-baseline="middle" id="paraDetails" text-anchor="middle" fill="black">
                        <tspan x="50%" dy="1.2em">
                            A fun description about this Industrial Fund A fun description about this Industrial Fund A fun description
                        </tspan>
                        <tspan x="50%" dy="1.2em">
                            about this Industrial Fund A fun description about this Industrial Fund   </tspan>
                    </text>
                </svg>
            </div>

        </>
    );
};

export default DetailSection;