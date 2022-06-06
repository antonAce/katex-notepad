import { stripFilename } from './util';

describe('strip filename from Windows-like path', () => {
    test('should return filename without spaces', () => {
        // arrange
        const filepath = 'C:\\User\\Documents\\filename.txt';
        const expectedFilename = 'filename';

        // act
        const actualFilename = stripFilename(filepath);

        // assert
        expect(actualFilename).toStrictEqual(expectedFilename);
    });

    test('should return filename with spaces', () => {
        // arrange
        const filepath = 'C:\\User\\Documents\\Regression Cost Function.txt';
        const expectedFilename = 'Regression Cost Function';

        // act
        const actualFilename = stripFilename(filepath);

        // assert
        expect(actualFilename).toStrictEqual(expectedFilename);
    });
});

describe('strip filename from Unix-like path', () => {
    test('should return filename without spaces', () => {
        // arrange
        const filepath = '/home/user/Documents/filename.txt';
        const expectedFilename = 'filename';

        // act
        const actualFilename = stripFilename(filepath);

        // assert
        expect(actualFilename).toStrictEqual(expectedFilename);
    });

    test('should return filename with spaces', () => {
        // arrange
        const filepath = '/home/user/Documents/Regression Cost Function.txt';
        const expectedFilename = 'Regression Cost Function';

        // act
        const actualFilename = stripFilename(filepath);

        // assert
        expect(actualFilename).toStrictEqual(expectedFilename);
    });

    test('should return filename for hidden files', () => {
        // arrange
        const filepath = '/home/user/Documents/.filename.txt';
        const expectedFilename = '.filename';

        // act
        const actualFilename = stripFilename(filepath);

        // assert
        expect(actualFilename).toStrictEqual(expectedFilename);
    });
});
