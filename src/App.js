import React, { useState } from 'react';
import './index.css';
import { ListNotes } from './ListNotes';
import { FocusNote } from './FocusNote';
import { Option } from './Option';

let data = {
    notes: [
        {
            uuid: '1',
            title: 'bonjour tout le monde',
            content: 'content bonjour kj    wenljewqjnf',
            delete: false,
            focus: false
        },
        {
            uuid: '2',
            title: 'list de course',
            content: 'toto\ntata\n',
            delete: false,
            focus: false
        },
        {
            uuid: '3',
            title: 'chose a faire',
            content: 'faire les course',
            delete: false,
            focus: false
        },
        {
            uuid: '4',
            title: 'bonjour tout le monde',
            content: 'very big content forlkewqnfekjwqnlkeewkjne wljejwn nfw qjnekjwnqlk newqnfe lknlje nwqkj nfwqjknlk jnewqnekfwjqnkjewnqljwqnlkfew nkejnkwq jnkjfe jfenwkj nefkjnwq nkewqn kfejnk nfekjewqnf lkjneflkwq newqn one note just for test notes overflow display on j;lewqnlkjfwqlkfjewq nejwq nlkfjnwq lkjnfewq lknfe nwqkjnfewqkj nfkjenwq kjnfekwqljn flkjenwqk jnkewqj',
            delete: false,
            focus: false
        },
    ]
};

localStorage.setItem('data', JSON.stringify(data));

const App = () => {
    const [noteFocus, setNoteFocus] = useState(undefined);

    const updateNote = (newNotes) => data.notes = newNotes;

    return (
        <div className="main">
            <ListNotes data={data} setNoteFocus={setNoteFocus}></ListNotes>
            <FocusNote
                data={data}
                noteFocus={noteFocus}
                updateNote={updateNote}
                setNoteFocus={setNoteFocus}>
            </FocusNote>
            <Option></Option>
        </div>
    );
};

export default App;
