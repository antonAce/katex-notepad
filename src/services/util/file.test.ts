import { stripFilename, replaceFilenameInPath, isFilenameValid } from './file';

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

describe('is filename valid check', () => {
    test.each([
        // arrange
        { caseType: "lowercase", filename: "filename" },
        { caseType: "uppercase", filename: "FILENAME" },
        { caseType: "mixed case", filename: "FiLeNaMe" },
    ])('should be valid if filename without spaces and $caseType', ({ caseType, filename }) => {
        // act
        const actualIsValid = isFilenameValid(filename);

        // assert
        expect(actualIsValid).toBeTruthy();
    });

    test.each([
        // arrange
        { condition: "numbers at the end", filename: "filename03" },
        { condition: "underscores in the middle", filename: "file_name" },
        { condition: "dashes in the middle", filename: "file-name" },
        { condition: "spaces in the middle", filename: "File name" },
        { condition: "dot at the beginning (hidden file)", filename: ".filename" },
    ])('should be valid if filename contains $condition', ({ condition, filename }) => {
        // act
        const actualIsValid = isFilenameValid(filename);

        // assert
        expect(actualIsValid).toBeTruthy();
    });

    test.each([
        // arrange
        { condition: "numbers at the beginning", filename: "03filename" },
        { condition: "dashes at both sides", filename: "-filename-" },
        { condition: "underscores at both sides", filename: "_filename_" },
        { condition: "has extension", filename: "filename.tex" },
        { condition: "has dots in the middle or at the end", filename: "file.name." },
    ])('should not be valid if filename contains $condition', ({ condition, filename }) => {
        // act
        const actualIsValid = isFilenameValid(filename);

        // assert
        expect(actualIsValid).toBeFalsy();
    });
});
