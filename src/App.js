import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';


function App() {
  const [ showModal, setShowModal ] =useState(false)
  const [ showEvents, setShowEvents ] = useState(true)
  const [ events, setEvents ] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id
      })
    })
    console.log(id);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const subtitle="All the latest event in Marioland"

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}

      {showEvents && 
        <EventList events={events} handleDelete={handleClick}/>
      }
      
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
         <NewEventForm addEvent={addEvent}/>
        </Modal>
      )}

      {!showModal &&
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      }

    </div>
  );
}

export default App;
