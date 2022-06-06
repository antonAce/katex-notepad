import { parseContent, RenderPiece } from './render';

describe('parse atomic tex expressions', () => {
    test('should parse empty content', () => {
        // arrange
        const content = "";
        const expectedPieces: RenderPiece[] = [];

        // act
        const actualPieces = parseContent(content);

        // assert
        expect(actualPieces).toStrictEqual(expectedPieces);
    });

    test('should parse text only as a single element', () => {
        // arrange
        const content = "this is a piece of text without formulas";
        const expectedPieces: RenderPiece[] = [{ type: "text", content: "this is a piece of text without formulas" }];

        // act
        const actualPieces = parseContent(content);

        // assert
        expect(actualPieces).toStrictEqual(expectedPieces);
    });

    test('should parse equation only as a single element', () => {
        // arrange
        const content = `$ \hat{J} (f(\theta, x), y) = || f(\theta, x) - y ||^{2} $`;
        const expectedPieces: RenderPiece[] = [{ type: "formula", content: ` \hat{J} (f(\theta, x), y) = || f(\theta, x) - y ||^{2} ` }];

        // act
        const actualPieces = parseContent(content);

        // assert
        expect(actualPieces).toStrictEqual(expectedPieces);
    });

    test('should parse equation with tight symbols coupling', () => {
        // arrange
        const content = `$\hat{J}(f(\theta,x),y)=||f(\theta,x)-y||^{2}$`;
        const expectedPieces: RenderPiece[] = [{ type: "formula", content: `\hat{J}(f(\theta,x),y)=||f(\theta,x)-y||^{2}` }];

        // act
        const actualPieces = parseContent(content);

        // assert
        expect(actualPieces).toStrictEqual(expectedPieces);
    });
});

describe('parse complex tex expressions', () => {
    test('should parse combinations with left-side equation', () => {
        // arrange
        const content = `$ \theta^{(i+1)} = \theta^{(i)} - \lambda \nabla_{\theta} J(\theta, x, y) $ - batch gradient descent recurrent sequence equation.`;
        const expectedPieces: RenderPiece[] = [
            { type: "formula", content: ` \theta^{(i+1)} = \theta^{(i)} - \lambda \nabla_{\theta} J(\theta, x, y) ` },
            { type: "text", content: " - batch gradient descent recurrent sequence equation." }
        ];

        // act
        const actualPieces = parseContent(content);

        // assert
        expect(actualPieces).toStrictEqual(expectedPieces);
    });

    test('should parse combinations with right-side equation', () => {
        // arrange
        const content = `The statement can be joined into a single formula: $ J_{j}(g, y) = - y \log(g) - (1 - y) \log(1 - g) $`;
        const expectedPieces: RenderPiece[] = [
            { type: "text", content: "The statement can be joined into a single formula: " },
            { type: "formula", content: ` J_{j}(g, y) = - y \log(g) - (1 - y) \log(1 - g) ` }
        ];

        // act
        const actualPieces = parseContent(content);

        // assert
        expect(actualPieces).toStrictEqual(expectedPieces);
    });

    test('should parse combinations of text and equations', () => {
        // arrange
        const content = `By definition, the gradient is a vector that points towards the highest increase of the function value $ F $ in high dimensional space $ R^{n} $, that can be interpreted as a vector of partial derivatives with respect to each parameter $ x_{1}, ..., x_{n} $ of the function $ F $ in the specific point $ a $.`;
        const expectedPieces: RenderPiece[] = [
            { type: "text", content: "By definition, the gradient is a vector that points towards the highest increase of the function value " },
            { type: "formula", content: ` F ` },
            { type: "text", content: " in high dimensional space " },
            { type: "formula", content: ` R^{n} ` },
            { type: "text", content: ", that can be interpreted as a vector of partial derivatives with respect to each parameter " },
            { type: "formula", content: ` x_{1}, ..., x_{n} ` },
            { type: "text", content: " of the function " },
            { type: "formula", content: ` F ` },
            { type: "text", content: " in the specific point " },
            { type: "formula", content: ` a ` },
            { type: "text", content: "." }
        ];

        // act
        const actualPieces = parseContent(content);

        // assert
        expect(actualPieces).toStrictEqual(expectedPieces);
    });
});
