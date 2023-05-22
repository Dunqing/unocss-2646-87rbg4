import { defineConfig } from 'unocss';
import presetAttributify from '@unocss/preset-attributify';
import presetUno from '@unocss/preset-uno';
import transformerDirectives from '@unocss/transformer-directives';
export default defineConfig({
  presets: [
    //   presetAttributify({
    //     nonValuedAttribute: false,
    //     prefix: 'u-',
    //     prefixedOnly: true,
    //     strict: true
    //   }),
    //   presetUno({
    //     dark: 'class',
    //     variablePrefix: 'u-'
    //   })
    // ],
    // theme: {
    //   preflightRoot: '*'
    // },
    // transformers: [
    //   transformerDirectives({
    //     applyVariable: [
    //       '--u-apply'
    //     ]
    //   })
  ],
});
