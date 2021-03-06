import { DOMParser } from "xmldom";

export default svgUtils = {
  dPathExtract: (svg) => {
    svg = svg.replace(/\\/g, "");
    let startToken = 'd="';
    const leftTrimSvg = svg.slice(svg.indexOf(startToken) + startToken.length);
    const rightTrimSvg = leftTrimSvg.slice(0, leftTrimSvg.indexOf('"'));
    return rightTrimSvg;
  },
  transformExtract: (svg) => {
    if (svg.includes("transform")) {
      svg = svg.replace(/\\/g, "");
      let startToken = 'transform="';
      const leftTrimSvg = svg.slice(
        svg.indexOf(startToken) + startToken.length
      );
      const rightTrimSvg = leftTrimSvg.slice(0, leftTrimSvg.indexOf('"'));
      return rightTrimSvg;
    } else return null;
  },
};
