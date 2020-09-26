import React, { useState } from 'react';
import './index.css';
import { FocusNote } from './FocusNote';
import { Option } from './Option';

const App = () => {
    const [text, setText] = useState('');
    return (
        <div className="main">
            <FocusNote
                text={text}
                setText={setText}
            ></FocusNote>
            <Option></Option>
        </div>
    );
};

export default App;
