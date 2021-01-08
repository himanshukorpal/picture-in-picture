const videoElement = document.getElementById('video');
const button = document.getElementById('btn');

// Prompt to select media stream , pass to video element, then play

const selectMediaStream = async() => {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        // Catch the Error
        console.log('Whoops, error here:', error)
    }
}

button.addEventListener('click', async () => {
   // Disble button
    button.disabled = true;
    // start pic in pic
    await videoElement.requestPictureInPicture();
    // enable button
    button.disabled =false;

});
//load
selectMediaStream();
