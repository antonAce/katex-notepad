import { Canvg } from 'canvg';
import { elementToSVG, inlineResources } from 'dom-to-svg';

export type RenderType = "formula" | "text";
export const inlineTexWrapper = "$";

export interface RenderPiece {
    type: RenderType;
    content: string;
}

export function parseContent(content: string): RenderPiece[] {
    let currentPiece: string = "";
    let currentPieceType: RenderType = "text";
    const peices: RenderPiece[] = []

    while (content.length > 0) {
        const currentChar = content[0];
        content = content.substring(1);

        if (currentChar === inlineTexWrapper) {
            if (currentPiece.length > 0) { peices.push({ type: currentPieceType, content: currentPiece }); }
            currentPieceType = (currentPieceType === "text") ? "formula" : "text";
            currentPiece = "";
        } else {
            currentPiece += currentChar;
        }
    }

    if (currentPiece.length > 0) { peices.push({ type: currentPieceType, content: currentPiece }); }
    return peices;
};

export async function renderElementToBase64(element: HTMLElement): Promise<string> {
    const svgDocument = elementToSVG(element);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') ?? {} as CanvasRenderingContext2D;

    await inlineResources(svgDocument.documentElement);
    const serializedSvg = new XMLSerializer().serializeToString(svgDocument);

    Canvg.fromString(context, serializedSvg).start();
    return canvas.toDataURL('image/png', 1.0).replace('data:image/png;base64,', '');
}
