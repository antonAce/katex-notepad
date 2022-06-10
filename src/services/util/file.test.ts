import { stripFilename, replaceFilenameInPath } from './file';

describe('strip filename from a filepath', () => {
    describe('strip filename from Windows-like path', () => {
        test('should return filename without spaces', () => {
            // arrange
            const filepath = String.raw`C:\User\Documents\filename.txt`;
            const expectedFilename = 'filename';

            // act
            const actualFilename = stripFilename(filepath);

            // assert
            expect(actualFilename).toStrictEqual(expectedFilename);
        });

        test('should return filename with spaces', () => {
            // arrange
            const filepath = String.raw`C:\User\Documents\Regression Cost Function.txt`;
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
});

describe('replace filename in a filepath', () => {
    describe('replace filename in Windows-like path', () => {
        test('should replace filename without spaces', () => {
            // arrange
            const newFilename = 'newFilename';
            const oldFilepath = String.raw`C:\User\Documents\filename.txt`;
            const expectedFilepath = String.raw`C:\User\Documents\newFilename.txt`;

            // act
            const actualFilename = replaceFilenameInPath(oldFilepath, newFilename);

            // assert
            expect(actualFilename).toStrictEqual(expectedFilepath);
        });

        test('should replace filename with spaces', () => {
            // arrange
            const newFilename = 'Regression Cost Function';
            const oldFilepath = String.raw`C:\User\Documents\filename.txt`;
            const expectedFilepath = String.raw`C:\User\Documents\Regression Cost Function.txt`;

            // act
            const actualFilename = replaceFilenameInPath(oldFilepath, newFilename);

            // assert
            expect(actualFilename).toStrictEqual(expectedFilepath);
        });
    });

    describe('replace filename from Unix-like path', () => {
        test('should replace filename without spaces', () => {
            // arrange
            const newFilename = 'newFilename';
            const oldFilepath = '/home/user/Documents/filename.txt';
            const expectedFilepath = '/home/user/Documents/newFilename.txt';

            // act
            const actualFilename = replaceFilenameInPath(oldFilepath, newFilename);

            // assert
            expect(actualFilename).toStrictEqual(expectedFilepath);
        });

        test('should replace filename with spaces', () => {
            // arrange
            const newFilename = 'Regression Cost Function';
            const oldFilepath = '/home/user/Documents/filename.txt';
            const expectedFilepath = '/home/user/Documents/Regression Cost Function.txt';

            // act
            const actualFilename = replaceFilenameInPath(oldFilepath, newFilename);

            // assert
            expect(actualFilename).toStrictEqual(expectedFilepath);
        });

        test('should replace filename for hidden files', () => {
            // arrange
            const newFilename = '.filename';
            const oldFilepath = '/home/user/Documents/filename.txt';
            const expectedFilepath = '/home/user/Documents/.filename.txt';

            // act
            const actualFilename = replaceFilenameInPath(oldFilepath, newFilename);

            // assert
            expect(actualFilename).toStrictEqual(expectedFilepath);
        });
    });
});
