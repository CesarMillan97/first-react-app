import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';


function App() {
  const [ showModal, setShowModal ] =useState(true)
  const [ showEvents, setShowEvents ] = useState(true)
  const [ events, setEvents ] = useState([
    { title: "Mario's birthday bash", id: 1 },
    { title: "Bowser's live stream", id: 2 },
    { title: "Race on moo moo farm", id: 3 },
  ])

  console.log(showEvents);

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

      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{ index } - { event.title }</h2>
          <button onClick={() => handleClick(event.id) }>delete event</button>
        </React.Fragment>
      ))}
      {showModal && (
        <Modal handleClose={handleClose}>
         <h2>10% Off Cupon Code!!</h2>
         <p>Use the code CESAR123 at the checkout</p>
        </Modal>
      )}

    </div>
  );
}

export default App;
