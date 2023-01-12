import type GrapesJS from 'grapesjs';
import commands from './commands';
import blocks from './blocks';
import panels from './panels';
import BasicBlocks from 'grapesjs-blocks-basic';
import '../index.scss';

export type PluginOptions = {
  /**
   * Which blocks to add.
   * @default []
   */
  blocks?: string[];

  /**
   * Add custom block options, based on block id.
   * @default (blockId) => ({})
   * @example (blockId) => blockId === 'quote' ? { attributes: {...} } : {};
   */
  block?: (blockId: string) => {};

  /**
   * Modal import title.
   * @default 'Import'
   */
  modalImportTitle?: string;

  /**
   * Modal import button text.
   * @default 'Import'
   */
  modalImportButton?: string;

  /**
   * Import description inside import modal.
   * @default ''
   */
  modalImportLabel?: string;

  /**
   * Default content to setup on import model open.
   * Could also be a function with a dynamic content return (must be a string).
   * @default ''
   * @example editor => editor.getHtml()
   */
  modalImportContent?: string | ((editor: GrapesJS.Editor) => string);

  /**
   * Code viewer (eg. CodeMirror) options.
   * @default {}
   */
  importViewerOptions?: Record<string, any>;

  /**
   * Confirm text before clearing the canvas.
   * @default 'Are you sure you want to clear the canvas?'
   */
  textCleanCanvas?: string;

  /**
   * Show the Style Manager on component change.
   * @default true
   */
  showStylesOnChange?: boolean;

  /**
   * Load custom preset theme.
   * @default true
   */
  useCustomTheme?: boolean;

  /**
   * Load custom preset theme.
   * @default true
   */
  showGlobalStyles?: boolean;
};

export type RequiredPluginOptions = Required<PluginOptions>;

const plugin: GrapesJS.Plugin<PluginOptions> = (
  editor,
  opts: Partial<PluginOptions> = {},
) => {
  const config: RequiredPluginOptions = {
    blocks: opts.blocks,
    block: () => ({}),
    modalImportTitle: 'Import',
    modalImportButton: 'Import',
    modalImportLabel: '',
    modalImportContent: '',
    importViewerOptions: {},
    textCleanCanvas: 'Are you sure you want to clear the canvas?',
    showStylesOnChange: true,
    useCustomTheme: false,
    showGlobalStyles: true,
    ...opts,
  };

  console.log(config);
  // Load blocks
  blocks(editor, config);

  // Load commands
  commands(editor, config);

  // Load panels
  // panels(editor, config);
};

export default plugin;
