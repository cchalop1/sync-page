import React, { useState, useEffect } from 'react';
import './index.css';

export const FocusNote = () => {
    // const [text, setText] = useState('');
    const refText = React.createRef();

    useEffect(() => {
    }, []);

    const handleChange = () => {
    };

    return (
        <div className="focusNote">
            <div
                ref={refText}
                className="content"
                contentEditable={true}
                onInput={handleChange}>
            </div>
        </div>
    );
};