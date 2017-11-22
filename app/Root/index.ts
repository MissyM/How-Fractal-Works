import {
  Actions,
  Inputs,
  Interfaces,
  StyleGroup,
  absoluteCenter,
  _,
  assoc,
} from 'fractal-core'
import { View, h } from 'fractal-core/interfaces/view'


export const state = {
  printing: false,
  text: '',
}

export type S = typeof state

export const inputs: Inputs = F => ({
  print: async () => {
    let s: S = F.stateOf()
    await F.runIt(['print', [s.text, F.ev('printEnd')]])
    await F.toAct('SetPrinting', true)
  },
  printEnd: async () => {
    await F.runIt(['alert', 'Printing finished'])
    await F.toAct('SetPrinting', false)
  },
})

export const actions: Actions<S> = {
  SetPrinting: value => s => {
    s.printing = value
    return s
  },
  SetText: assoc('text'),
}

const view: View<S> = F => async s => {
  let style = F.ctx.groups.style

  return h('div', {
    key: F.ctx.name,
    class: { [style.base]: true },
  }, [
    h('input', {
      class: { [style.input]: true },
      on: {
        input: F.act('SetText', _, ['target', 'value']),
      },
    }),
    h('div', {
      class: {
        [style.button]: true,
      },
      on: {
        click: F.ev('print'),
      },
    }, 'Print'),
    ...s.printing ? [
      h('div', {class: { [style.text]: true }}, 'Printing...'),
    ] : [],
  ])
}

export const interfaces: Interfaces = { view }

const style: StyleGroup = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  button: {
    width: '280px',
    height: '70px',
    margin: '20px',
    fontSize: '38px',
    borderRadius: '35px',
    color: 'white',
    backgroundColor: '#13A513',
    textAlign: 'center',
    transition: 'transform .4s, background .2s',
    cursor: 'pointer',
    userSelect: 'none',
    ...<any> absoluteCenter,
    '&:hover': {
      color: 'white',
      backgroundColor: 'purple',
      border: '3px solid purple',
      transform: 'perspective(1px) scale(1.1)',
    },
  },
  buttonActive: {
    color: 'purple',
    backgroundColor: '#FBFBFB',
    border: '3px solid #13A513',
  },
}

export const groups = { style }
