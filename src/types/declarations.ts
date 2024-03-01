// ensures that typescript doesn't throw "cannot find type declarations" for .module.css files
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
