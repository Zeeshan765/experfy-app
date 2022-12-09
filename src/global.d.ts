declare module '*.png' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }

  declare module '*.svg' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }

declare module 'grapesjs-project-manager' { 
  export default function grapesjsProjectManager(editor: any, options: any): void;
}