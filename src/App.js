import './App.css';
import Register from './pages/Register';
import { useGlobalContext } from './context';
import ContactList from './pages/ContactList';

function App() {

  const { user } = useGlobalContext();

  return (
    <div className="App">
      {
        user ? <ContactList></ContactList> : <Register></Register>
      }

    </div>
  );
}

export default App;
