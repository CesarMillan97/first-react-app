import { useState } from 'react';
import './App.css';


function App() {
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

  return (
    <div className="App">
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
        <div key={event.id}>
          <h2>{ index } - { event.title }</h2>
          <button onClick={() => handleClick(event.id) }>delete event</button>
        </div>
      ))}

    </div>
  );
}

export default App;
