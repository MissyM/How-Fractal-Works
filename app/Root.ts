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

export const name = 'Root'

export const state = {
  imprimir: false,
  text: '',
}

export type S = typeof state

export const inputs: Inputs<S> = ({ toAct, runIt, ev, stateOf }) => ({
  imprimir: async () => {
    let s: S = stateOf()
    await runIt(['imprimir', [s.text, ev('impresionF')]])
    await toAct('SetImprimir', true)
  },
  impresionF: async() => {
    await runIt(['alert', 'Impresion finalizada'])
    await toAct('SetImprimir', false)
  },
})

export const actions: Actions<S> = {
  SetImprimir: value => s => {
    s.imprimir = value
    return s
  },
  SetText: assoc('text'),
}

const view: View<S> = ({ ctx, ev, act }) => s => {
  let style = ctx.groups.style

  return h('div', {
    key: ctx.name,
    class: { [style.base]: true },
  }, [
    h('input', {
      class: { [style.input]: true },
      on: {
        input: act('SetText', _, ['target', 'value']),
      },
    }),
    h('div', {
      class: {
        [style.button]: true,
      },
      on: {
        click: ev('imprimir'),
      },
    },  'Imprimir'),
    ...s.imprimir ? [
      h('div', {class: { [style.text]: true }}, 'Imprimiendo...'),
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
