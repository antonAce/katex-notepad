import React from 'react';

function KatexTextarea() {
    const textAreaStyles: React.CSSProperties = {
        resize: "none"
    };

    return (
        <textarea className="rounded-md bg-transparent p-4 text-md leading-loose w-full h-full" style={textAreaStyles}
            placeholder="Type your text or formulas here. To render equations wrap them into $ ... $."></textarea>
    );
}

export default KatexTextarea;
