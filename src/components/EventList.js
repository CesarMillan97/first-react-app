import React from 'react'
import styles from './EventList.module.css'

export default function EventList({ events, handleDelete }) {
   console.log(events)
   return (
     <div>
         { events.map((event, index) => (
            <div className={styles.card} key={index}>
               <h2> { index } - { event.title } </h2>
               <p> {event.location} - {event.date} </p>
               <button onClick={ () => handleDelete(event.id) }>delete event</button>
            </div>
         ))}
     </div>
  )
}
