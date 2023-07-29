import React, { useContext } from 'react'
import NotesContext from '../store/NotesContext'
import AddNote from './AddNote'
import Note from './Note'

const Notes = () => {

    const {notes} = useContext(NotesContext)


  return (
    <div className="notes">
        <AddNote />
        {
                notes.map((note) => {
                    return (<Note {...note} key={note.id} />)
                })
        }
        
    </div>
  )
}

export default Notes