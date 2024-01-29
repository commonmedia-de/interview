import { stringParser } from '../src/index';

describe('StringParser', () => {

    test('Basic NewLine Split', () => {
        expect(stringParser("Hallo\nTest")).toStrictEqual(["Hallo", "Test"]);
      });

    test('Basic NewLine Split', () => {
        expect(stringParser("Hallo\nTest")).not.toStrictEqual([""]);
    });

    test('NewLine at End', () => {
        expect(stringParser("Hallo\nTest\n")).not.toStrictEqual(["Hallo", "Test", ""]);
    });

    test('Emtpty String', () => {
        expect(stringParser("")).toStrictEqual([]);
    });

    test('Single NewLine', () => {
        expect(stringParser("\n")).toStrictEqual([]);
    });

    test('single NewLine', () => {
        expect(stringParser("\n")).not.toStrictEqual([""]);
    });

    test('multiple NewLine', () => {
        expect(stringParser("\n\n\n")).toStrictEqual([]);
    });

    test('single char', () => {
        expect(stringParser("a")).toStrictEqual(["a"]);
    });

    test('String with spaces', () => {
        expect(stringParser("Hallo Welt")).toStrictEqual(["Hallo Welt"]);
    });

    test('String with special characters', () => {
        expect(stringParser("Hallo@Welt#2021")).toStrictEqual(["Hallo@Welt#2021"]);
    });

    test('String with multiple new lines', () => {
        expect(stringParser("Hallo\n\nWelt")).toStrictEqual(["Hallo", "Welt"]);
    });

    test('String with new line and spaces', () => {
        expect(stringParser("Hallo \n Welt")).toStrictEqual(["Hallo ", " Welt"]);
    });

    test('String with tab characters', () => {
        expect(stringParser("Hallo\tWelt")).toStrictEqual(["Hallo\tWelt"]);
    });

    test('very long string', () => {
        let repeat = 100_000;
        let array:string[] = []
        for (let i = 0; i < repeat; i++) {
            array.push('a')
        }//for
        expect(stringParser("a\n".repeat(repeat))).toStrictEqual(array);
        });
});
