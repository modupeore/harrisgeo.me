declare const graphql: (query: TemplateStringsArray) => void;

declare module "swag-components" {
  export function Navbar(args: any): any;
  export function NavItem(args: any): any;
}

declare module "html-to-react" {
  export class Parser {
    constructor();

    parse(arg: any): any;
  }
}

declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";
