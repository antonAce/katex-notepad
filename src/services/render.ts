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
