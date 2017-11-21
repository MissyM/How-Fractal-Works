import {
  run,
  Component,
  // DEV
  logFns,
  RunModule,
} from 'fractal-core'
import { viewHandler } from 'fractal-core/interfaces/view'
import { styleHandler } from 'fractal-core/groups/style'

export const runModule: RunModule = (root: Component<any>, DEV: boolean, viewCb?) => run({
  root,
  log: DEV,
  record: DEV,
  groups: {
    style: styleHandler('', DEV),
  },
  tasks: {
    print: mod => ({
      state: {},
      handle: async data => {
        console.log(data[0])
        setTimeout(() => mod.dispatchEv({}, data[1]), 3000)
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
