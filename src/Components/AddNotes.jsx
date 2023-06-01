import React from 'react';
import { v4 as uuidv4 } from "uuid";

const AddNotes = ({ notes, setNotes }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            id: uuidv4(),
            text: e.target.notes.value
        };

        setNotes([...notes, newNote]);

        e.target.notes.value = '';
    };

    return (
        <div className='AddNotes'>
            <form onSubmit={handleSubmit}>
                <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddNotes;
