import { ReactNode } from 'react';
import { HintKey } from '../store/types';

import Kbd from './Kbd';

interface HintProps {
    hintKey: HintKey
}

function Hint(props: HintProps) {
    const hints: { [key in HintKey]: ReactNode } = {
        "default": (<>Hold <Kbd>Shift</Kbd> to toggle render mode.</>),
        "new": (<>Create new empty project.</>),
        "open": (<>Open existing project from file.</>),
        "save": (<>Save content to file.</>),
        "export": (<>Export content to image file.</>),
        "delete": (<>Delete current project.</>),
        "theme": (<>Toggle between Light and Dark mode.</>),
        "render": (<>Toggle render mode.</>),
        "menu": (<>Toggle side menu.</>),
        "none": (<></>)
    };

    return (<>{hints[props.hintKey]}</>);
}

export default Hint;
