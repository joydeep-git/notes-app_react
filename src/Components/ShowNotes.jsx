import React, { useState } from 'react';
import { BsTrash } from "react-icons/bs";

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
                    <div key={item.id}>
                        <div>
                            {selectedNote === item.id ? (
                                <textarea
                                    type='text'
                                    value={item.text}
                                    onChange={(e) => handleEditChange(e, item.id)}
                                />
                            ) : (
                                <p>{item.text}</p>
                            )}
                        </div>
                        <div>
                            <BsTrash onClick={() => handleDelete(item.id)} />
                        </div>
                        <div>
                            <button onClick={() => handleEdit(item.id)}>Edit</button>
                        </div>
                    </div>
                ))
            ) : (
                <h1>Add Notes</h1>
            )}
        </div>
    );
};

export default ShowNotes;
