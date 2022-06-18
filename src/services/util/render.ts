import { Canvg } from 'canvg';
import { elementToSVG, inlineResources } from 'dom-to-svg';

export async function renderElementToBase64(element: HTMLElement): Promise<string> {
    const svgDocument = elementToSVG(element);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') ?? {} as CanvasRenderingContext2D;

    await inlineResources(svgDocument.documentElement);
    const serializedSvg = new XMLSerializer().serializeToString(svgDocument);

    Canvg.fromString(context, serializedSvg).start();
    return canvas.toDataURL('image/png', 1.0).replace('data:image/png;base64,', '');
}
