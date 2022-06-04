import { useEffect } from 'react';
import { contextMenuEvent } from './services/config';
import { setDefaultTitle } from './services/window'

import { toggleRender } from './store/slice/editor';
import { useAppDispatch } from './store/hooks';

import NavBar from './components/Navbar';
import Editor from './components/Editor';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setDefaultTitle();
    contextMenuEvent();

    document.addEventListener('keydown', (e) => { if (e.key === "Alt") { dispatch(toggleRender(true)); } });
    document.addEventListener('keyup', (e) => { if (e.key === "Alt") { dispatch(toggleRender(false)); } });
  });

  return (
    <div className="flex flex-col w-screen h-screen bg-base-100 dark:bg-base-900">
      <div className="basis-14 min-h-14"><NavBar /></div>
      <div className="flex-1"><Editor /></div>
    </div>
  );
}

export default App;
