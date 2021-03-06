import InlineTex from './InlineTex'

import { parseContent } from '../services/util/parser';
import { AlignText } from '../store/types';

interface EditorRenderProps {
    fontSize: number;
    content: string;
    align: AlignText;
}

function EditorRender(props: EditorRenderProps) {
    const renderStyles: React.CSSProperties = { textAlign: props.align };

    return (
        <span id="rendered-text" className="bg-transparent px-2 py-1 mt-2" style={renderStyles}>
            { parseContent(props.content).map(
                (piece, i) => piece.type === "formula" ?
                (<InlineTex key={i} content={piece.content} fontSize={props.fontSize} />) :
                (<span key={i} className="bg-transparent text-base-800 dark:text-base-300" style={{ fontSize: `${props.fontSize}px`, fontFamily: `"Times New Roman", Times, serif` }}>{piece.content}</span>))
            }
        </span>
    );
}

export default EditorRender;
