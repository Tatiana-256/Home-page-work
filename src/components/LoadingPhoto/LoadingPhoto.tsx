import React, {useState} from 'react';
import styles from "./LoadingPhoto.module.css";
// import {CommonPageStylePink} from '../../../Common-files/components/CommonPageStylePink/CommonPageStylePink';
// import {InfoIcon} from "../../../Common-files/components/InfoIcon/InfoIcon";
import {Box} from './Box/Box';
import {Camera} from './TakingPhoto/TakingPhoto';
// import {CameraDemo} from "./test directoty/camera";


export const LoadingPhoto = () => {

    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [cardImage, setCardImage] = useState();

    console.log(cardImage)

    const btnName = 'jetzt Fotos auftnehman'

    return <>
        {isCameraOpen ?

            // <CameraDemo
            //     onCapture={(blob: any) => setCardImage(blob)}
            //     onClear={() => setCardImage(undefined)}
            // />
            <Camera
                onCapture={blob => setCardImage(blob)}
                onClear={() => setCardImage(undefined)}
            />
            :
            <div style={{height: "70vh", width: '80%'}}>
                <div className={styles.loading_box}>
                    {/*<InfoIcon headerText={'BILDER HOCHLADEN'} numberInfoPage={'405'}/>*/}
                    <div className={styles.boxes}>
                        <Box openCamera={() => setIsCameraOpen(true)}/>
                    </div>
                </div>
            </div>
        }

        {/*{cardImage && (*/}
        {/*    <div>*/}
        {/*        <h2>Preview</h2>*/}
        {/*        <img src={cardImage && URL.createObjectURL(cardImage)}/>*/}
        {/*    </div>*/}
        {/*)}*/}

    </>
}


