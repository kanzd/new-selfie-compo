import React,{useState} from 'react'
import Navbar from "../../Shared/Navbar/index";
import Logo from "../../Assets/Zest_logo_green.png";
import Container from "../../Shared/Container/index";
import ListTile from "../../Shared/Listtile/index";
import Video from "../../Shared/Video/index";
import ListTileOption from "../../Shared/ListTileOptions/index";
import "./index.css";
export default function Index() {
    const [img,setImg]=useState('');
    const [current_screen,setCurrentScreen]=useState(1);
  return (
    <>
   {current_screen===1?<Container>
    {/* <Navbar>
        <div style={{display:"block"}}>
        <img src={Logo} />
        </div>
    </Navbar> */}
    <ListTile  heading={"Take a Selfie"} subheading={"Verify your identity by clicking your photo"} tail={"csdc"}></ListTile>
    <Video onClick={(image:any)=>{
        setImg(image);
        setCurrentScreen(2);
    }}></Video>
    {/* <ListTileOption /> */}
    </Container>:<Container color={"#1A1A1A"}>
        <div className='second-root'>
            <div className="noti-text">
            Looking so good!
            </div>
            <div className='image-container'>
                <img  width={210} height={205} src={img}></img>
            </div>
        </div>
    </Container>}
    
    
   
    </>
  )
}
