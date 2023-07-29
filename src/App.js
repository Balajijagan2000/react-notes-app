
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
import { NotesContextProvider } from "./store/NotesContext";
import { useContext } from "react";
import ThemeContext from "./store/ThemeContext";
function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme ? 'container' : 'container light'} >
      
      <NotesContextProvider>

        <NavBar />

        <Notes />

      </NotesContextProvider>


    </div>
  );
}

export default App;
