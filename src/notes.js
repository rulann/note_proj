import React, { useState } from 'react';
import details from './res/d0ts.png';
import pallete from './res/pallete.png';
import blossom from './res/blossom.PNG';
import fog from './res/fog.PNG';
import green from './res/green.jpg';
import purple from './res/purple.PNG';

function NoteCard({ title, body, deleteNote, backgroundColor }) {
  const [showOptions, setShowOptions] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className='newNote' style={{ backgroundColor }}>
      <button className='details' onClick={() => setShowOptions(!showOptions)}>
        <img src={details} className='icons' alt='details-icon' />
      </button>
      {showOptions && (
        <ul className='options'>
          <li className='delete' onClick={deleteNote}>
            Delete
          </li>
          <hr />
          <li>
            created on:<br /> {formatDate(currentDate)}
          </li>
        </ul>
      )}
      <div className='title'>{title}</div>
      <br></br>
      <div className='Notebody'>{body}</div>
    </div>
  );
}

function Card() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [noteColor, setNoteColor] = useState('#282c34');

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addBody = (e) => {
    setBody(e.target.value);
  };

  const done = () => {
    setNotes((prevNotes) => [...prevNotes, { title, body, color: noteColor }]);
    setTitle('');
    setBody('');
  };

  const editBG = (index) => {
    setNoteColor(notes[index].color);
  };

  const deleteNote = (index) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes.splice(index, 1);
      return updatedNotes;
    });
  };

  const handleColorClick = (color) => {
    setNoteColor(color);
  };

  return (
    <div className='main'>
      <div className='takeNote'>
        <input
          type='text'
          className='title'
          name='title'
          placeholder='Title'
          value={title}
          onChange={addTitle}
        />
        <br></br>
        <textarea
          type='text'
          className='Notebody'
          name='body'
          placeholder='Take a note...'
          value={body}
          onChange={addBody}
        />
        <button className='done' onClick={done}>
          Done
        </button>
        <button className='details' onClick={() => setShowOptions(!showOptions)}>
          <img src={pallete} className='pallete' alt='pallete-icon' />
        </button>
        {showOptions && (
          <ul className='colorsoption'>
            <li className='colosList'>
              <button className='colorbtn' onClick={() => handleColorClick('#CB4D75')}>
                <img src={blossom} className='colors' alt='blossom-color' />
              </button>
            </li>
            <li className='colosList'>
              <button className='colorbtn' onClick={() => handleColorClick('#325766')}>
                <img src={fog} className='colors' alt='fog-color' />
              </button>
            </li>
            <li className='colosList'>
              <button className='colorbtn' onClick={() => handleColorClick('#91B4AD')}>
                <img src={green} className='colors' alt='green-color' />
              </button>
            </li>
            <li className='colosList'>
              <button className='colorbtn' onClick={() => handleColorClick('#5B4786')}>
                <img src={purple} className='colors' alt='purple-color' />
              </button>
            </li>
          </ul>
        )}
      </div>
      {notes.map((note, index) => (
        <NoteCard
          key={index}
          title={note.title}
          body={note.body}
          backgroundColor={note.color}
          editBG={() => editBG(index)}
          deleteNote={() => deleteNote(index)}
        />
      ))}
    </div>
  );
}

export default Card;
