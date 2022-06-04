import InlineTex from './InlineTex'
import { parseContent } from '../services/render';

interface EditorRenderProps {
    fontSize: number;
    content: string;
}

function EditorRender(props: EditorRenderProps) {
    return (
        <div className="bg-transparent px-2 py-1 mt-2">
            { parseContent(props.content).map(
                piece => piece.type === "formula" ?
                (<InlineTex content={props.content} fontSize={props.fontSize} />) :
                (<div className="bg-transparent text-neutral-focus" style={{ fontSize: `${props.fontSize}px`, fontFamily: `"Times New Roman", Times, serif` }}>{props.content}</div>))
            }
        </div>
    );
}

export default EditorRender;
