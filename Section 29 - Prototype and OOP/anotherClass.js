class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.b = b;
    this.g = g;
    this.name = name;
  }
  innterRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innterRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innterRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 67, 89, "white");
