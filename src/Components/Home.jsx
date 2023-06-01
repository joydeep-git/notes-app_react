import React, { useState } from 'react';

import "../SCSS/Home.scss";

//Importing  Components
import ShowNotes from './ShowNotes';
import AddNotes from './AddNotes';

const Home = () => {

    const [notes, setNotes] = useState([]);

    return (
        <div className='Home'>

            <AddNotes notes={notes} setNotes={setNotes} />
            <ShowNotes notes={notes} setNotes={setNotes} />

        </div>
    )
}

export default Home;