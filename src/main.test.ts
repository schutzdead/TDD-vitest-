import {capitalize} from "./testDriven"
import {reverseString} from "./testDriven"
import {caesarCipher} from "./testDriven"
import {describe, expect, it} from "vitest"

describe('#capitalize', () => {
    it('Short sentence', () => {
        expect(capitalize("my name is Lucas")).toBe("My name is Lucas")
    })
    it('No sentence', () => {
        expect(capitalize("")).toBe("")
    })
})

describe("#reverse", () => {
    it('Classic'), () => {
        expect(reverseString("Hello")).toBe("olleH")
    }
    it('With space'), () => {
        expect(reverseString("Hello world")).toBe("dlrow olleH")
    }
    it('No sentence'), () => 
        expect(reverseString("")).toBe("")        
})

describe("#cryptographie", () => {
    it('Classic', () => {
        expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe("bcdefghijklmnopqrstuvwxyza")
    })
    it('Space', () => {
        expect(caesarCipher("defend the east wall of the castle", 1)).toBe("efgfoe uif fbtu xbmm pg uif dbtumf")
    })
    it('Number', () => 
        expect(caesarCipher("123", 1)).toBe("123"))        
    it('Number + Letter', () => 
        expect(caesarCipher("123aze", 1)).toBe("123baf"))       
    it('Nothing', () => 
        expect(caesarCipher("", 1)).toBe(""))        
    it('Exclamation', () => 
        expect(caesarCipher("abc!", 1)).toBe("bcd!"))        
})