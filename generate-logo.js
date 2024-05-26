const Shape = require("./lib/shape");

function generateLogo(answers) {
  console.log(answers);

  const shape = new Shape(answers.logoName, answers.color, answers.textColor);

  let logoSVG;

  if (answers.shape === "circle") {
    logoSVG = shape.createCircleSVG();
  } else if (answers.shape === "square") {
    logoSVG = shape.createSquareSVG();
  } else {
    logoSVG = shape.createTriangleSVG();
  }

  return logoSVG;
}

module.exports = generateLogo;
