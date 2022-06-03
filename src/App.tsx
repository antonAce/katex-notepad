import NavBar from './components/Navbar';
import Editor from './components/Editor';

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="basis-14 min-h-14"><NavBar /></div>
      <div className="flex-1"><Editor /></div>
    </div>
  );
}

export default App;
