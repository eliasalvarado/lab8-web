import MazeComponent from './MazeComponent'

export default {
  title: 'Maze/MazeComponent',
  component: MazeComponent,
  tags: ['autodocs'],
  argTypes: {
    tipo: 'wall',
  },
}

export const Wall = {
  args: {
    tipo: 'wall',
  },
}

export const Corner = {
  args: {
    tipo: 'corner',
  },
}
