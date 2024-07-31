import ClientListArtistView from './ArtistView/Component/ClientListArtistView';
import ClientList from './ClientView/Component/ClientList';
import './App.css';

function App() {
  // have function that says if client clicks on client to take them to ClientList
  // but if they click on artist to take them to ClientListArtistView page
  return (
   <div>
    <button>Client</button>
    <button>Artist</button>
   </div>
  );
}

export default App;
