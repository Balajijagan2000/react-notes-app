import { createContext, useReducer } from "react";
import notesReducer,{ initialState } from "../reducers/notesReducer";


const NotesContext = createContext(initialState);


export const NotesContextProvider = ({children}) => {

    const [state,dispatch]= useReducer(notesReducer,initialState)
    
    const addNote = (note) =>{

        
        const updatednotes = {
            notes: [note,...state.notes]
        }

        dispatch({
            type:"ADD_NOTE",
            payload:updatednotes
        })
    }
    const deleteNote = (id) => {
        const updatednotes = state.notes.filter((note) => {
            return note.id !== id
        })

        dispatch( {
            type: 'DELETE_NOTE',
            payload:{notes:updatednotes} 
        })
    }

    const updateNote = (id,newnote) => {
      
        const updatednotes = state.notes;
        state.notes.forEach(note => {
            if(note.id === id) {
                note.text = newnote.text
            }
        });
 

        dispatch( {
            type: 'UPDATE_NOTE',
            payload:{notes:updatednotes} 
        })
    }

    const updateFormData = ({id,text,title},action) => {

        const formdata = {id,text,title,action:action}
        dispatch(
            {
            type:'UPDATE_FORM_DATA',
            payload:{formdata:formdata}
        }
        )
    }
    const value = {
        notes:state.notes,
        formdata:state.formdata,
        addNote,
        deleteNote,
        updateNote,
        updateFormData
    }
    return (
        <NotesContext.Provider value={value}>
            {children}
            
        </NotesContext.Provider>
    )

}
export default NotesContext