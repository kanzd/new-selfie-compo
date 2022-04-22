import React, { useEffect,useState } from 'react'
import "./index.css";
export default function Index(Props: any) {
    const [img,setImg]=useState('');
    const successHandler = (stream: any) => {

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
                width: 260, height: 275
            }
        })
            .then(stream => successHandler(stream))
            .catch(error => console.log(error));
    }, [])
    return (
        <>
        <div className='video-camera'>
            
            <div className='inside'>
                <video id='user-video' src="" ></video>
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
        <div className='button' onClick={(e)=>{
            const video:HTMLVideoElement | any = document.querySelector("#user-video");
            const canvas:HTMLCanvasElement | any = document.createElement("canvas");
            canvas.height=video.videoHeight;
            canvas.width=video.videoWidth;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0);
            const dataUri = canvas.toDataURL(`image/png`);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log(dataUri);
            setImg(dataUri);
        }}>

        </div>
        <div>
            <img
            src={img}></img>
        </div>
        </>
    )
}
