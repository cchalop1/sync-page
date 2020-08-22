import React, { useState, useEffect } from 'react';
import './index.css';

export const FocusNote = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    useEffect(() => {
        if (props.noteFocus) {
            setTitle(props.noteFocus.title);
            setContent(props.noteFocus.content);
        }
    }, [props.noteFocus]);

    const updateNote = (title, content) => {
        setTitle(title);
        setContent(content);
        if (props.noteFocus) {
            let cpyNoteFocus = props.noteFocus;
            cpyNoteFocus.title = title;
            cpyNoteFocus.content = content;
            props.setNoteFocus(cpyNoteFocus);
            props.updateNote(props.data.notes.map(el => {
                if (el.uuid === cpyNoteFocus.uuid) {
                    el.title = title;
                    el.content = content;
                }
                return el;
            }));
            props.setData(props.data);

            localStorage.setItem('data', JSON.stringify(props.data));
        }
    };

    return (
        <div className="focusNote">
            <input
                type="text"
                className="title"
                value={title}
                ref={props.refTitle}
                onChange={(e) => updateNote(e.target.value, content)}>
            </input>
            <textarea
                className="content"
                value={content}
                onChange={(e) => updateNote(title, e.target.value)}>
            </textarea>
        </div>
    );
};