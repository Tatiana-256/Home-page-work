import React, {useState, useRef, useEffect} from "react";
import Measure from "react-measure";
import styles from "./TakingPhoto.module.css";
import {useUserMedia} from "../CameraHooks/useUserMedia";
// import {useOffsets} from "../CameraHooks/useOffsets";
import {useCardRatio} from "../CameraHooks/useCardRatio";
import {Video} from "../test directoty/camera/styles";

const CAPTURE_OPTIONS = {
    audio: false,
    video: {facingMode: "environment"}
};

interface CameraProps {
    onCapture: (blob: any) => void
    onClear: () => void
}


export const Camera: React.FC<CameraProps> = ({onCapture, onClear}) => {
    console.log("Render camera");
    let videoRef = useRef<any>(null);
    let canvasRef = useRef<any>();


    const [container, setContainer] = useState({width: 200, height: 200});
    const [aspectRatio, calculateRatio] = useCardRatio(1.586);
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);


    const mediaStream = useUserMedia(CAPTURE_OPTIONS);

    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream;
    }

    // const onCapture = async (blob: any) => {
    //     console.log("Upload to server");
    //     console.log(canvasRef);
    //
    // };


    function handleCanPlay() {
        calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
        setIsVideoPlaying(true);
        videoRef.current.play();
    }

    const height = window.innerHeight
    const width = window.innerWidth
    const maxWidth: number = 340
    const maxHeight: number = 620

    console.log(height, width)


    function calculateAspectRatioFit(srcWidth: number, srcHeight: number,
                                     maxWidth: number, maxHeight: number) {

        const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

        return {width: srcWidth * ratio, height: srcHeight * ratio};
    }


    const pictureHeight = calculateAspectRatioFit(width, height, maxWidth, maxHeight).width
    const pictureWidth = calculateAspectRatioFit(width, height, maxWidth, maxHeight).height

    function handleCapture() {
        const context = canvasRef.current.getContext("2d");
        context.drawImage(videoRef.current, 0, 0, pictureWidth, pictureHeight)
        canvasRef.current.toBlob((blob: any) => onCapture(blob), "image/jpeg", 1);
        setIsVideoPlaying(false)

    }


    function handleResize(contentRect: any) {
        setContainer({
            width: contentRect.bounds.width,
            height: Math.round(contentRect.bounds.width / aspectRatio)
        });
    }

    if (!mediaStream) {
        return null;
    }


    return (<Measure bounds onResize={handleResize}>
            {({measureRef}) => (
                <div className={styles.openCamera} ref={measureRef}>
                    <div className={styles.camera_box}>
                        <div className={styles.numberPhotos}>1/4 photos</div>
                        <div>
                            <video
                                ref={videoRef}
                                hidden={!isVideoPlaying}
                                onCanPlay={handleCanPlay}
                                autoPlay
                                playsInline
                                muted
                            />
                            <canvas
                                ref={canvasRef}
                                hidden={isVideoPlaying}
                                style={{width: `${width}px`, height: `${height}px`}
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            onClick={isVideoPlaying ? handleCapture
                                :
                                () => {
                                    setIsVideoPlaying(true)
                                    onClear()
                                }}
                        >
                            {isVideoPlaying ? ' Take photo' : 'Try again'}
                        </button>
                    </div>
                </div>
            )}
        </Measure>
    )
        ;
}
