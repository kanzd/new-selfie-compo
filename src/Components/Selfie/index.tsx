import React from 'react'
import Navbar from "../../Shared/Navbar/index";
import Logo from "../../Assets/Zest_logo_green.png";
import Container from "../../Shared/Container/index";
import ListTile from "../../Shared/Listtile/index";
import Video from "../../Shared/Video/index";
import "./index.css";
export default function Index() {
  return (
    <>
   
    <Container>
    <Navbar>
        <div style={{display:"block"}}>
        <img src={Logo} />
        </div>
    </Navbar>
    <ListTile heading={"Take a Selfie"} subheading={"Verify your identity by clicking your photo"} tail={"csdc"}></ListTile>
    <Video ></Video>
    </Container>
   
    </>
  )
}
