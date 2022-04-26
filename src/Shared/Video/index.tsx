import React, { useEffect,useState } from 'react'
import "./index.css";
export default function Index(props: any) {
    const [img,setImg]=useState('');
    const [permit,setPermit] = useState(false);
    const successHandler = (stream: any) => {
        setPermit(true);
        // window.streamTracks = stream;
        const video = document.querySelector('video');
        if (video) {
            video.srcObject = stream;
            video.setAttribute('autoPlay', '');
            video.setAttribute('muted', '');
            video.setAttribute('playsInline', '') // required to tell iOS safari we don't want fullscreen
            video.play();
            video.addEventListener('loadedmetadata', (e) => {

            });

        } else {

        }

    }
    useEffect(() => {
        navigator?.mediaDevices?.getUserMedia({
            audio: false, video: {
                facingMode: { ideal: "user" },
                width: 360, height: 405
            }
        })
            .then(stream => successHandler(stream))
            .catch(error =>{
                props.noPermission();
            });
            
           return function1;
    }, [])
    const function1=()=>{
        const video:HTMLVideoElement | any = document.querySelector("#user-video");
        const mediaStream=video.srcObject;
        console.log(mediaStream);
        const tracks = mediaStream.getTracks();
        tracks.forEach((track:any) => track.stop());
    }
    return (
        <>
        <div className='video-camera'>
            
            <div className='inside'>
                <video id='user-video' height={405}  src="" ></video>
            </div>
            <div className='frame'>
                <div className='top'>
                    <div className='top-left'>

                    </div>
                    <div className='top-right'>

                    </div>
                </div>
                <div className='bottom'>
                    <div className='bottom-left'>

                    </div>
                    <div className='bottom-right'>

                    </div>
                </div>

            </div>
        </div>
        <div className='button' onClick={(e:any)=>{
            if(permit){
            const video:HTMLVideoElement | any = document.querySelector("#user-video");
            const canvas:HTMLCanvasElement | any = document.createElement("canvas");
            canvas.height=video.videoHeight;
            canvas.width=video.videoWidth;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0);
            const dataUri = canvas.toDataURL(`image/png`);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            props.onClick(dataUri,video);
          
            }
           
        }}>
            <div className='inner-button'>

            </div>
        </div>
        
          
        </>
    )
}
