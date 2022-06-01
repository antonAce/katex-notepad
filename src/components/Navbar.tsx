import ActionPanel from './ActionPanel';
import FilenamePanel from './FilenamePanel';
import TogglePanel from './TogglePanel';

function NavBar() {
    return (
        <div className="flex flex-row flex-nowrap w-full h-full border-b border-neutral-focus/20">
            <div className="basis-56 min-w-56"><ActionPanel /></div>
            <div className="flex-auto"><FilenamePanel /></div>
            <div className="basis-56 min-w-56"><TogglePanel /></div>
        </div>
    )
}

export default NavBar;
