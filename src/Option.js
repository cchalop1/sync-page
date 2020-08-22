import React, { useState, useEffect } from 'react';
import './index.css';
import { createPeer, createChannel } from "./Rtc";
import QRCode from 'qrcode.react';

export const Option = () => {
    const [peer, setPeer] = useState(null);


    useEffect(() => {
        createPeer()
            .then(res => setPeer(res));
    }, []);

    return (
        <div className="param">
            <button>Downolaod Notes</button>
            <button onClick={() => createChannel()}>Sync</button>
            {peer && peer.offer ? <QRCode 
            renderAs="svg"
            className="qcode"
            value={peer.offer.sdp} /> : <p>null</p>}

        </div>
    );
};