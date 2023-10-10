/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "../assets" {
  const someValue: string;
  export default someValue;
}

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >;
  export default ReactComponent;
}
