import CreateCoworking from './CreateCoworking';
import './App.css'
import ListCoworkings from './ListCoworkings';
import ContactForm from './ContactForm';

function App() {
  return (
    <div>
      <header>
        <>
          <CreateCoworking />
          <ListCoworkings />
          <ContactForm />
        </>
      </header>
    </div>
  );
}

export default App;
