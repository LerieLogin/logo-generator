const Shape = require('../lib/shape')





describe('the shape class', () => {
    test('foo', () => {
        const name = 'jwf'
        const color = 'blue'
        const textColor = 'red'
        const shape = new Shape(name, color, textColor)
        expect(shape).toEqual({
            text: 'jwf',
            fillColor: 'blue',
            textFill: 'red' 
        })
    })
})