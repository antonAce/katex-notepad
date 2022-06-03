import { memo } from 'react';

import { toggleRender, newFile, saveContentToFile } from '../store/slice/editor';
import { useAppDispatch } from '../store/hooks';

import Toggle from './Toggle';
import Button from './Button';

const RenderOnIcon = memo(() => (<svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>));
const RenderOffIcon = memo(() => (<svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>));
const MenuOpenIcon = memo(() => (<svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>));
const MenuCloseIcon = memo(() => (<svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>));
const DarkModeIcon = memo(() => (<svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>));
const LightModeIcon = memo(() => (<svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>));

function NavBar() {
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-row flex-nowrap w-full h-full bg-base-200">
            <div className="flex-auto">
                <div className="flex flex-row flex-nowrap gap-x-1 justify-start items-center w-full h-full p-default">
                    <Button onClick={_ => dispatch(newFile())}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Button>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                    </Button>
                    <Button onClick={_ => dispatch(saveContentToFile())}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                    </Button>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </Button>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-icons h-icons" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </Button>
                    <Toggle onClick={val => dispatch(toggleRender(val))} defaultNode={<RenderOnIcon />} toggledNode={<RenderOffIcon />} />
                </div>
            </div>
            <div className="basis-18 min-w-18">
                <div className="flex flex-row flex-nowrap gap-x-1 justify-start items-center w-full h-full p-default">
                    <Toggle defaultNode={<DarkModeIcon />} toggledNode={<LightModeIcon />} />
                    <Toggle defaultNode={<MenuOpenIcon />} toggledNode={<MenuCloseIcon />} />
                </div>
            </div>
        </div>
    )
}

export default NavBar;
