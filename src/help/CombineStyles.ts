const CombineStyles = (...styles: any[]): string =>
  styles
    .filter(style => !!style)
    .join(' ')

export { CombineStyles }
