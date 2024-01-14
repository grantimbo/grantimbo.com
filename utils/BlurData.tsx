export const shimmer = (
  w: number,
  h: number,
  bgColor?: string,
  shimerColor?: string,
) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${bgColor || "#0b1433"}" offset="20%" />
      <stop stop-color="${shimerColor || "#0d1a43"}" offset="50%" />
      <stop stop-color="${bgColor || "#0b1433"}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${bgColor || "#0b1433"}" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
