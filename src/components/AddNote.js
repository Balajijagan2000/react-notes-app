import React, { useContext ,useEffect,useState} from 'react'

import NotesContext from '../store/NotesContext'

function AddNote(prop) {
  
  const {notes,addNote,formdata,updateNote,updateFormData} = useContext(NotesContext)
 

  useEffect(() => {
    setNote({
      title:formdata.title,
      text:formdata.text,})
  },[formdata])
  const [note,setNote] = useState({
   
   
    title:formdata.title,
    text:formdata.text,
    
  })
 


  const handleSubmit = (e) => {
    e.preventDefault()
    if(formdata.action === 'ADD') {
      const timestamp = new Date()
    const timestamFormat = new Intl.DateTimeFormat('en-us', {
      dateStyle:'medium',
      timeStyle:'short'
    })


    const id = notes.length === 0 ? 1 : notes[0].id + 1 
    if(note.text.trim() === '' || note.title.trim() === '') {
      alert('Fields should not be empty')
      setNote({title:'',text:''})
      return

    }
    addNote({id,...note,created:timestamFormat.format(timestamp)})
    setNote({title:'',text:''})
    } else if(formdata.action === 'UPDATE') {

      updateNote(formdata.id,{...note})
      const dummy = {id:'',text:'',title:''}
      updateFormData(dummy,'ADD')
    }
    
  }
  return (
   
      <form className="add-note__form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" 
        className="title"
        name="title" 
        value={note.title} 
        onChange={(e) => setNote({...note,title:e.target.value})} 
        required
        disabled={formdata.action === 'UPDATE' ? true : false}
        />

        <textarea placeholder="Enter text here"
        className="text"
        name="text"
        onChange={(e) => setNote({...note,text:e.target.value})}
        value={note.text}
        required></textarea>
        <button type="submit">{formdata.action === 'ADD' ? '+' : 'U'}</button>
        
      </form>
   
  )
}

export default AddNote