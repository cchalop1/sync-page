import React, { useState } from 'react';
import './index.css';
import { ListNotes } from './ListNotes';
import { FocusNote } from './FocusNote';
import { Option } from './Option';

const getDataLocalStorage = () => {
    if (localStorage.getItem('data')) {
        return JSON.parse(localStorage.getItem('data'));
    }
    localStorage.setItem('data', JSON.stringify({ notes: [] }));
    return ({ notes: [] });
};

let data = getDataLocalStorage();


const App = () => {
    const [noteFocus, setNoteFocus] = useState(undefined);

    const updateNote = (newNotes) => data.notes = newNotes;

    const createNewNote = (newNote) => {
        data.notes.push(newNote);
        localStorage.setItem('data', JSON.stringify(data));
    };

    return (
        <div className="main">
            <ListNotes
                data={data}
                setNoteFocus={setNoteFocus}
                createNewNote={createNewNote}>
            </ListNotes>
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
