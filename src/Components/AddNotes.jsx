import React from 'react';
import { v4 as uuidv4 } from "uuid";

import "../SCSS/AddNotes.scss";

const AddNotes = ({ notes, setNotes }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputValue = e.target.notes.value.trim();

        if (inputValue.length !== 0) {
            const newNote = {
                id: uuidv4(),
                text: inputValue
            };

            setNotes([...notes, newNote]);
            e.target.notes.value = '';
        } else {
            alert("Input field is empty");
        }
    };

    return (
        <div className='AddNotes'>
            <form onSubmit={handleSubmit}>
                <textarea
                    name="notes"
                    id="notes"
                    cols="25"
                    rows="5"
                    placeholder='Add notes'
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddNotes;
