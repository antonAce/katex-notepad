import katex from 'katex';

interface InlineTexProps {
    fontSize: number;
    content: string;
}

function InlineTex(props: InlineTexProps) {
    const renderInlineStyles: React.CSSProperties = { fontSize: `${props.fontSize}px` };
    const renderedContent = katex.renderToString(props.content, { displayMode: false, throwOnError: false });

    return (
        <span className="bg-transparent text-neutral-focus" style={renderInlineStyles} dangerouslySetInnerHTML={{ __html: renderedContent }} ></span>
    );
}

export default InlineTex;
