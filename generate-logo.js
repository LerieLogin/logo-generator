function createCircleSVG(text, circleFill = "red", textFill = "white") {
  return `
<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
  <circle r="45" cx="50" cy="50" fill="${circleFill}" />
  <text x="39" y="53" fill="${textFill}">${text}</text>
</svg>
`;
}

function createSquareSVG(text, rectFill = "red", textFill = "white") {
  return `
<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" x="10" y="10" fill="${rectFill}"/>
    <text x="45" y="57 fill="${textFill}">${text}</text>
</svg>
`;
}

function createTriangleSVG(text, triFill = "red", textFill = "white") {
  return `
<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
	<polygon points="50,15 100,100 0,100" fill="${triFill}"/>
  <text x="39" y="70" fill="${textFill}">${text}</text>
</svg>
`;
}

function generateLogo(answers) {
  console.log(answers);

	let logoSVG

	if (answers.shape === 'circle') {
		logoSVG = createCircleSVG(
			answers.logoName,
			answers.color,
			answers.textColor
		);

	} else if ( answers.shape === 'square') {
		logoSVG = createSquareSVG(
			answers.logoName,
			answers.color,
			answers.textColor
		);
	} else {
		logoSVG = createTriangleSVG(
			answers.logoName,
			answers.color,
			answers.textColor
		);
	}
  
  return logoSVG;
}

module.exports = generateLogo;
