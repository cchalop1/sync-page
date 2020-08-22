
window.isRtcSupported = !!(window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection);

const configuration = { 'iceServers': [{ 'urls': 'stun:stun.l.google.com:19302' }] };

// const signalingChannel = new SignalingChannel(remoteClientId);
// signalingChannel.addEventListener('message', message => {
//     // New message from remote client received
// });

// // Send an asynchronous message to the remote client
// signalingChannel.send('Hello!');

// const makeCall = async () => {
// signalingChannel.addEventListener('message', async message => {
//     if (message.answer) {
//         const remoteDesc = new RTCSessionDescription(message.answer);
//         await peerConnection.setRemoteDescription(remoteDesc);
//     }
// });
// signalingChannel.send({ 'offer': offer });
// };

export const createPeer = async () => {
    const peerConnection = new window.RTCPeerConnection(configuration);
    const offer = await peerConnection.createOffer();
    peerConnection.setLocalDescription(offer);
    return {
        conn: peerConnection,
        offer: offer
    };
};

export const createChannel = () => {
    window.URL = window.URL || window.webkitURL;
    console.log(window.URL);
    // window.SignalingChannel();
};;

// signalingChannel.addEventListener('message', async message => {
//     if (message.answer) {
//         const remoteDesc = new window.RTCSessionDescription(message.answer);
//         await peerConnection.setRemoteDescription(remoteDesc);
//     }
// });


// // Listen for local ICE candidates on the local RTCPeerConnection
// peerConnection.addEventListener('icecandidate', event => {
//     if (event.candidate) {
//         signalingChannel.send({ 'new-ice-candidate': event.candidate });
//     }
// });

// // Listen for remote ICE candidates and add them to the local RTCPeerConnection
// signalingChannel.addEventListener('message', async message => {
//     if (message.iceCandidate) {
//         try {
//             await peerConnection.addIceCandidate(message.iceCandidate);
//         } catch (e) {
//             console.error('Error adding received ice candidate', e);
//         }
//     }
// });


// // Listen for connectionstatechange on the local RTCPeerConnection
// peerConnection.addEventListener('connectionstatechange', event => {
//     if (peerConnection.connectionState === 'connected') {
//         // Peers connected!
//     }
// });
