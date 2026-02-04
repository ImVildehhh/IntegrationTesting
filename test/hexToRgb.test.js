// Unit testi

const { expect } = require('chai');
const { hexToRgb } = require('../scripts/hexToRgb');

describe('hexToRgb converting hex to rgb', function() {
    before(function () {
        console.log('Starting tests...');
    })

    after(function () {
        console.log('Tests finished.');
    })

    // --Basic funtioning tests--

    it('converts 6 digits hex with # to rgb', () => {
        expect(hexToRgb('#FF00AA')).to.deep.equal({r: 255, g: 0, b: 170});
    })
    it('converts 6 digits hex without # to rgb', () => {
        expect(hexToRgb('FF00AA')).to.deep.equal({r: 255, g: 0, b: 170});
    })
    it('converts 3 digits shorthand with # to rgb', () => {
        expect(hexToRgb('#F0A')).to.deep.equal({r: 255, g: 0, b: 170});
    })
    it('converts 3 digits shorthand without # to rgb', () => {
        expect(hexToRgb('F0A')).to.deep.equal({r: 255, g: 0, b: 170});
    })
    it('handles lowercase and uppercase consistenlty', () => {
        expect(hexToRgb('#FF00AA')).to.deep.equal({r: 255, g: 0, b: 170});
        expect(hexToRgb('#ff00aa')).to.deep.equal({r: 255, g: 0, b: 170});
    })
    it('Edge color: black and white', () => {
        expect(hexToRgb('#000000')).to.deep.equal({r: 0, g: 0, b: 0});
        expect(hexToRgb('#ffffff')).to.deep.equal({r: 255, g: 255, b: 255});

    })
    // -- Error handling tests --
    it('throws an invalid length (e.g, 2 digits', () => {
        expect(() => hexToRgb('#ff')).to.throw('Invalid hex color');
    })
    it('throws on invalid characters', () => {
        expect(() => hexToRgb('#GG00AA')).to.throw('Invalid hex color');
        expect(() => hexToRgb('12x45z')).to.throw('Invalid hex color');
    });
    
    it('throws when input is not a string', () => {
        expect(() => hexToRgb(null)).to.throw(TypeError);
        expect(() => hexToRgb(123)).to.throw(TypeError);
        expect(() => hexToRgb({})).to.throw(TypeError);
        expect(() => hexToRgb([])).to.throw(TypeError);
    });
    
    // -- Strictness tests --
    it('does not allow leading/trailing spaces by default', () => {
        expect(() => hexToRgb('  #FF00AA ')).to.throw('Invalid hex color');
    });
})