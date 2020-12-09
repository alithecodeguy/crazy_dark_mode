function rgbaInvertor(rgbaString) {
  return (
    "rgba(" +
    rgbaString
      .slice(5, rgbaString.length - 4)
      .split(",")
      .map((color) => 255 - color)
      .reduce((a, b) => `${a},${b}`) +
    "," +
    1 -
    rgbaString.slice(5, rgbaString.length - 4).split(",")[3] +
    ")"
  );
}

function rgbInvertor(rgbString) {
  return (
    "rgb(" +
    rgbString
      .slice(4, rgbString.length - 1)
      .split(",")
      .map((color) => 255 - color)
      .reduce((a, b) => `${a},${b}`) +
    ")"
  );
}

function darkMode(property) {
  for (let el of Object.values(document.getElementsByTagName("*"))) {
    let computedEl_bgColor = window
      .getComputedStyle(el, null)
      .getPropertyValue(property);
    if (!computedEl_bgColor.includes("rgb")) {
      let invertedColor = rgbInvertor("rgb(255,255,255)");
      el.style[property] = invertedColor;
    } else {
      if (computedEl_bgColor.includes("rgba")) {
        let invertedColor = rgbaInvertor(computedEl_bgColor);
        el.style[property] = invertedColor;
      } else if (computedEl_bgColor.includes("rgb")) {
        let invertedColor = rgbInvertor(computedEl_bgColor);
        el.style[property] = invertedColor;
      }
    }
  }
}

darkMode("background-color");
darkMode("color");
