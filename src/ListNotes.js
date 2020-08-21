import React from 'react';
import './index.css';

export const ListNotes = (props) => {
    return (
        <div className="listNotes">
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
    );
};