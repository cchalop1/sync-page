import React from 'react';
import './index.css';
import { uuid } from './utils';

export const ListNotes = (props) => {
    return (
        <div className="listNotes">
            <div className="listPrev">
                {props.data.notes.map((note, idx) => {
                    return (<div
                        key={idx}
                        className="prev"
                        onClick={() => props.setNoteFocus(note)}
                    >
                        <h1>{note.title}</h1>
                        <p>{note.content}</p>
                    </div>);
                })}

            </div>
            <button className="createNote" onClick={() => {
                let newNote = {
                    uuid: uuid(),
                    title: '',
                    content: '',
                    delete: false,
                    createDate: Date.now()
                };
                props.setNoteFocus(newNote);
                props.createNewNote(newNote);
            }}>Create Note</button>
        </div>
    );
};