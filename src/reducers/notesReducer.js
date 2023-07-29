
export const initialState = {

    formdata:{action:"ADD",id:"",text:"",title:""},
    notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : localStorage.setItem("notes",JSON.stringify([]))

}

const notesReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            localStorage.setItem("notes",JSON.stringify(action.payload.notes))
            return {
                ...state,
                notes: action.payload.notes
                  
            }
        case 'DELETE_NOTE':
            localStorage.setItem("notes",JSON.stringify(action.payload.notes))
            return {
                ...state,
                notes: action.payload.notes
                  
            }
        case 'UPDATE_NOTE':
          
            localStorage.setItem("notes",JSON.stringify(action.payload.notes))
            return {
                ...state,
                notes: action.payload.notes
            }
        case 'UPDATE_FORM_DATA':
          
            return {
                ...state,
                formdata:action.payload.formdata
            }
        default:
            break;

    }
}

export default notesReducer