import { adsTxtChecker } from '../src/index';
// import { stringParser, hashParser, compare } from '../src/index';

describe('adsTxtChecker', () => {
        test('No missing elements', () => {
            expect(adsTxtChecker("Hello\nWord\n!", ["Hello", "Word", "!"])).toStrictEqual([]);
            expect(adsTxtChecker("Hello\nWord\n!", ["Hello", "Word", "!"])).not.toStrictEqual(["Hello", "Word", "!"]);
        });
        test('One missing element', () => {
            expect(adsTxtChecker("Hello\nWord\n!", ["Hello", "Word", "!", "Test"])).toStrictEqual(["Test"]);
            expect(adsTxtChecker("Hello\nWord\n!", ["Hello", "Word", "!", "Test"])).not.toStrictEqual([]);
        });
        test('Multiple missing elements', () => {
            expect(adsTxtChecker("Hello\nWord\n!", ["Hello", "Word", "!", "Test", "Example"])).toStrictEqual(["Test", "Example"]);
            expect(adsTxtChecker("Hello\nWord\n!", ["Hello", "Word", "!", "Test", "Example"])).not.toStrictEqual(["Hello", "Word", "!"]);
        });
        test('Empty fetch and dbArray', () => {
            expect(adsTxtChecker("", [])).toStrictEqual([]);
            expect(adsTxtChecker("", ["Hello"])).not.toStrictEqual([]);
        });

});


//Helping function tests

// describe('StringParser', () => {
//     describe('Positive', () => {
//         test('Basic NewLine Split', () => {
//             expect(stringParser("Hallo\nTest")).toStrictEqual(["Hallo", "Test"]);
//         });

//         test('Emtpty String', () => {
//             expect(stringParser("")).toStrictEqual([]);
//         });
    
//         test('Single NewLine', () => {
//             expect(stringParser("\n")).toStrictEqual([]);
//         });

//         test('Multiple NewLine', () => {
//             expect(stringParser("\n\n\n")).toStrictEqual([]);
//         });
    
//         test('Single char', () => {
//             expect(stringParser("a")).toStrictEqual(["a"]);
//         });
    
//         test('String with spaces', () => {
//             expect(stringParser("Hallo Welt")).toStrictEqual(["Hallo Welt"]);
//         });
    
//         test('String with special characters', () => {
//             expect(stringParser("Hallo@Welt#2021")).toStrictEqual(["Hallo@Welt#2021"]);
//         });
    
//         test('String with multiple new lines', () => {
//             expect(stringParser("Hallo\n\nWelt")).toStrictEqual(["Hallo", "Welt"]);
//         });
    
//         test('String with new line and spaces', () => {
//             expect(stringParser("Hallo \n Welt")).toStrictEqual(["Hallo ", " Welt"]);
//         });
    
//         test('String with tab characters', () => {
//             expect(stringParser("Hallo\tWelt")).toStrictEqual(["Hallo\tWelt"]);
//         });
    
//         test('Very long string', () => {
//             let repeat = 100_000;
//             let array:string[] = []
//             for (let i = 0; i < repeat; i++) {
//                 array.push('a')
//             }//for
//             expect(stringParser("a\n".repeat(repeat))).toStrictEqual(array);
//             });


//     });
//     describe('Negative', () => {
//         test('Basic NewLine Split', () => {
//             expect(stringParser("Hallo\nTest")).not.toStrictEqual([""]);
//         });

//         test('NewLine at End', () => {
//             expect(stringParser("Hallo\nTest\n")).not.toStrictEqual(["Hallo", "Test", ""]);
//         });

//         test('Single NewLine', () => {
//             expect(stringParser("\n")).not.toStrictEqual([""]);
//         });

//     });
// });

// describe('HashParser', () => {
//     describe('Positive', () => {
//         test('Empty array', () => {
//             expect(hashParser([])).toStrictEqual({});
//         });
//         test('Basic Funconality test', () => {
//             const map = hashParser(["Hello", "Word", "!"]);
//             expect(Object.keys(map).length).toBe(3);
//         });
//     });
// });

// describe('Compare', () => {
//     describe('Positive', () => {
//         test('Empty hashMap and dbArray', () => {
//             expect(compare({}, [])).toStrictEqual([]);
//         });

//         test('Non-empty hashMap and empty dbArray', () => {
//             expect(compare({key: " "}, [])).toStrictEqual([]);
//         });

//         test('Empty hashMap and non-empty dbArray', () => {
//             expect(compare({}, ["key"])).toStrictEqual(["key"]);
//         });

//         test('Non-empty hashMap and dbArray with no matches', () => {
//             expect(compare({key1: " "}, ["key2"])).toStrictEqual(["key2"]);
//         });

//         test('Non-empty hashMap and dbArray with one match', () => {
//             expect(compare({"key": " "}, ["key"])).toStrictEqual([]);
//         });

//         test('Non-empty hashMap and dbArray with multiple matches', () => {
//             expect(compare({key1: " ", key2: " "}, ["key1", "key2"])).toStrictEqual([]);
//         });

//         test('Non-empty hashMap and dbArray with partial matches', () => {
//             expect(compare({key1: " ", key2: " "}, ["key1", "key3"])).toStrictEqual(["key3"]);
//         });
//     });
//     describe('Negative', () => {
//         test('Non-empty hashMap and dbArray with duplicate matches', () => {
//             expect(compare({key: " "}, ["key", "key"])).not.toStrictEqual(["key", "key"]);
//         });

//         test('Non-empty hashMap and dbArray with one match', () => {
//             expect(compare({"key": " "}, ["key"])).not.toStrictEqual(["key"]);
//         });
//     });
// });
