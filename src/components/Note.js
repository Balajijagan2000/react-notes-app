import React, { useContext} from 'react'
import NotesContext from '../store/NotesContext'

const Note = ({id,title,text,created}) => {
    const {deleteNote,updateFormData} = useContext(NotesContext)
   
    const handleDelete =() => {
        deleteNote(id)
    }  

  return (
    <div className="note">
        <div className="note-header">

            <h3>{title}</h3>
            <span className="delete-btn" onClick={handleDelete}>x</span>

        </div>
        <div className="note-body" onClick={() => updateFormData({id,title,text},'UPDATE')}>
            
            {text}
            
        </div>
        <div className="note-footer">
        <p>{created}</p>
        </div>
    </div>
  )
}

export default Note