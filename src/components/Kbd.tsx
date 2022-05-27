import React, { ReactNode } from 'react';

interface KbdProps {
    children: ReactNode;
}

function Kbd(props: KbdProps) {
    const styles: React.CSSProperties = {
        borderBottomWidth: "2px",
        minHeight: "2.2em",
        minWidth: "2.2em"
    };

    return (
        <kbd className="border border-neutral-focus border-opacity-20 bg-base-200 px-2 rounded-lg" style={styles}>{props.children}</kbd>
    );
}

export default Kbd;
