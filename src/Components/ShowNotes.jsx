import React, { useState } from 'react';
import { BsTrash } from "react-icons/bs";

import "../SCSS/ShowNotes.scss";

const ShowNotes = ({ notes, setNotes }) => {

    const [selectedNote, setSelectedNote] = useState(null);

    const handleDelete = (ID) => {
        const updatedValue = notes.filter((e) => e.id !== ID);
        setNotes(updatedValue);
    };

    const handleEdit = (ID) => {
        setSelectedNote(ID);
    };

    const handleEditChange = (e, ID) => {
        const updatedNotes = notes.map((item) => {
            if (item.id === ID) {
                return {
                    ...item,
                    text: e.target.value,
                };
            }
            return item;
        });

        setNotes(updatedNotes);
    };

    return (
        <div className='ShowNotes'>
            {notes.length > 0 ? (
                notes.map((item) => (
                    <div key={item.id} className='item'>

                        <div className='main'>
                            {selectedNote === item.id ? (
                                <textarea
                                    cols="auto"
                                    className='text'
                                    type='text'
                                    value={item.text}
                                    onChange={(e) => handleEditChange(e, item.id)}
                                />
                            ) : <textarea disabled value={item.text} />}
                        </div>

                        <div className='buttons' >
                            <BsTrash className='icon' onClick={() => handleDelete(item.id)} />
                            <button onClick={() => handleEdit(item.id)}>Edit</button>
                        </div>

                    </div>
                ))
            ) : (
                <h1 className='empty'>Add Notes</h1>
            )}
        </div>
    );
};

export default ShowNotes;
