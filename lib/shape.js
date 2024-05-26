class Shape {
    constructor(text, fillColor = "white", textFill = "red") {
        this.text      = text,
        this.fillColor = fillColor,
        this.textFill  = textFill
    }
    createCircleSVG() {
        return `
      <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill="${this.fillColor}" />
        <text x="39" y="53" fill="${this.textFill}">${this.text}</text>
      </svg>
      `;
      }
      
    createSquareSVG() {
        return `
      <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" x="10" y="10" fill="${this.fillColor}"/>
          <text x="45" y="57 fill="${this.textFill}">${this.text}</text>
      </svg>
      `;
      }
      
    createTriangleSVG() {
        return `
      <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,15 100,100 0,100" fill="${this.fillColor}"/>
        <text x="39" y="70" fill="${this.textFill}">${this.text}</text>
      </svg>
      `;
      }
}