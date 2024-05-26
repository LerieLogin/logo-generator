

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
