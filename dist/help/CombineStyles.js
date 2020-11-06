const CombineStyles = (...styles) => styles.filter((style) => !!style).join(" ");
export {CombineStyles};
