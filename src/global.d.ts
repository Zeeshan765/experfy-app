declare module '*.png' {
  const value: import('react').ImageSourcePropType;
  export default value;
}

declare module '*.svg' {
  import React = require('react');
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module 'grapesjs-project-manager' {
  export default function grapesjsProjectManager(
    editor: any,
    options: any
  ): void;
}
