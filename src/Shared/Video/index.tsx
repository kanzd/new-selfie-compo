import React, { useEffect } from 'react'
import "./index.css";
export default function Index(Props: any) {
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
                <video className='user-video' src="" ></video>
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
        <div className='button'>

        </div>
        </>
    )
}
