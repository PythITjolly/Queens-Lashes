import React from "react";
import '../App.css';
import '../Styles/Subheader.css';
import Subheader from "../Layout/Subheader";
import ServicesCards from "../Layout/ServicesCards";

export default function Services() {
    return (
        <>
        <Subheader />
        <section className="section2-services">
            <ServicesCards/>
        </section>


        </>
    )
}

