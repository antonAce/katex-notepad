import ActionPanel from './ActionPanel';
import FilenamePanel from './FilenamePanel';
import Button from './Button';

function NavBar() {
    return (
        <div className="flex flex-row flex-nowrap w-full h-full border-b border-neutral-focus/20">
            <div className="basis-56 min-w-56"><ActionPanel /></div>
            <div className="flex-auto"><FilenamePanel /></div>
            <div className="basis-56 min-w-56">
                <div className="flex flex-row justify-end w-full h-full p-default">
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
