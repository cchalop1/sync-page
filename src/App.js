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

const App = () => {
    const [noteFocus, setNoteFocus] = useState(undefined);
    const [data, setData] = useState(getDataLocalStorage());
    const refTitle = React.createRef();

    const updateNote = (newNotes) => data.notes = newNotes;

    const createNewNote = (newNote) => {
        let cpyData = data;
        cpyData.notes.push(newNote);
        setData(cpyData);
        localStorage.setItem('data', JSON.stringify(cpyData));
    };

    const delNote = (note) => {
        let cpyData = data;
        cpyData.notes = data.notes.filter(nt => nt.uuid !== note.uuid);
        setData(cpyData);
        localStorage.setItem('data', JSON.stringify(data));
        setNoteFocus(undefined);
    };

    return (
        <div className="main">
            <ListNotes
                data={data}
                setNoteFocus={setNoteFocus}
                createNewNote={createNewNote}
                delNote={delNote}
                refTitle={refTitle}>
            </ListNotes>
            <FocusNote
                data={data}
                noteFocus={noteFocus}
                setData={setData}
                updateNote={updateNote}
                setNoteFocus={setNoteFocus}
                refTitle={refTitle}>
            </FocusNote>
            <Option></Option>
        </div>
    );
};

export default App;
