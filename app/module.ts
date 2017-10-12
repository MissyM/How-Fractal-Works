import {
  run,
  Component,
  // DEV
  logFns,
  RunModule,
  computeEvent,
} from 'fractal-core'
import { viewHandler } from 'fractal-core/interfaces/view'
import { styleHandler } from 'fractal-core/groups/style'

export const runModule: RunModule = (root: Component<any>, DEV: boolean, viewCb?) => run({
  root,
  groups: {
    style: styleHandler('', DEV),
  },
  tasks: {
    imprimir: mod => ({
      state: {},
      handle: async datos => {
        console.log(datos[0])
        mod.dispatch(computeEvent({}, datos[1]))
      },
      dispose: () => {},
    }),
    alert: mod => ({
      state: {},
      handle: async text => {
        alert(text)
      },
      dispose: () => {},
    }),
  },
  interfaces: {
    view: viewHandler('#app', viewCb),
  },
...DEV ? logFns : {},
})
