import InlineTex from './InlineTex'
import { parseContent } from '../services/render';

interface EditorRenderProps {
    fontSize: number;
    content: string;
}

function EditorRender(props: EditorRenderProps) {
    return (
        <span className="bg-transparent px-2 py-1 mt-2">
            { parseContent(props.content).map(
                (piece, i) => piece.type === "formula" ?
                (<InlineTex key={i} content={piece.content} fontSize={props.fontSize} />) :
                (<span key={i} className="bg-transparent text-base-800 dark:text-base-300" style={{ fontSize: `${props.fontSize}px`, fontFamily: `"Times New Roman", Times, serif` }}>{piece.content}</span>))
            }
        </span>
    );
}

export default EditorRender;
