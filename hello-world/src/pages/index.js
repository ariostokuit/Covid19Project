import React from "react"
import { Link,Sidebar } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.css"

export default function Home() {
    return (
        <main>
            <div style={{color: `purple`, fontSize: `72px`}}>Covid 19 Website</div>
            <hr></hr>
            <div>
                <p>Welcome to the Covid19 webpage. This webpage displays a map of the entire world with current situation of the Covid-19 </p>
                <br></br>     
            </div>
            <div className="Subtitle">
                <h2>COVID-19 Dashboard by Ariosto Kuit, Mauricio Macias, Reeder Loveland, and Gabe at California State University of Fullerton</h2>
            </div>
           
        </main>
        
        ) 

}
