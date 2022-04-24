import React,{useState} from 'react'
import Navbar from "../../Shared/Navbar/index";
import Logo from "../../Assets/Zest_logo_green.png";
import Container from "../../Shared/Container/index";
import ListTile from "../../Shared/Listtile/index";
import Video from "../../Shared/Video/index";
import ListTileOption from "../../Shared/ListTileOptions/index";
import Popup from "../../Shared/Popup/index";
import "./index.css";
export default function Index() {
    const [img,setImg]=useState('');
    const [current_screen,setCurrentScreen]=useState(1);
    const [popup,setPopup]=useState(false);
  return (
    <>
   {current_screen===1?<Container>
    {/* <Navbar>
        <div style={{display:"block"}}>
        <img src={Logo} />
        </div>
    </Navbar> */}
    <ListTile  heading={"Take a Selfie"} subheading={"Verify your identity by clicking your photo"} tail={"csdc"}></ListTile>
    <Video noPermission={()=>{
        setPopup(true);
    }} onClick={(image:any,video:any)=>{
        const mediaStream = video.srcObject;
        const tracks = mediaStream.getTracks();
      tracks.forEach((track:any)=>{
          track.stop();
      })
        video.srcObject = null;
        console.log(tracks);
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
                <img  width={205} height={205} src={img}></img>
            </div>
            <div className='confirm-selfie' onClick={(e)=>{}}>
            Confirm selfie 
            </div>
            <div className='retake-selfie' onClick={(e)=>{
                setCurrentScreen(1);
            }}>
            Retake selfie
            </div>
        </div>
    </Container>}
    
    <Popup open={popup}>
        <div className='popup-content'>
            <img className='popup-icon' src={"https://assets.zestmoney.in/assets/customers/bolt/camera_circle.png"}></img>
            <div className="popup-heading">
            Camera permission
            </div>
            <div className='popup-subheading'>
            Please grant camera permission to continue with KYC verification
            </div>
            <div className='popup-button'>
            Continue with camera access
            </div>
        </div>
        
    </Popup>
   
    </>
  )
}
