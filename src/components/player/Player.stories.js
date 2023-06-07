import Player from './Player'
import hpImg from '../../assets/harry.png'
import rwImg from '../../assets/ron.png'

export default {
  title: 'Player/Player',
  component: Player,
  tags: ['autodocs'],
  argTypes: {
    src: hpImg,
    x: 0,
    y: 0,
  },
}

export const HarryPotter = {
  args: {
    src: hpImg,
    x: 0,
    y: 0,
  },
}

export const Ron = {
  args: {
    src: rwImg,
    x: 0,
    y: 0,
  },
}
