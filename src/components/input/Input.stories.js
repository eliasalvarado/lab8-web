import Input from './Input'

export default {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: '',
    text: '',
  },
}

export const Ancho = {
  args: {
    type: 'number',
    text: 'Ancho',
  },
}

export const Alto = {
  args: {
    type: 'number',
    text: 'Alto',
  },
}
