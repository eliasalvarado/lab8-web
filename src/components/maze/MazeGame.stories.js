import MazeGame from './MazeGame'

export default {
  title: 'Maze/Game',
  component: MazeGame,
  tags: ['autodocs'],
  argTypes: {
    w: 4,
    h: 4,
    personajeId: 'HP',
    maze: [['+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+'], ['|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+']],
  },
}

export const HarryPotter = {
  args: {
    w: 5,
    h: 5,
    personajeId: 'HP',
    maze: [['+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+'], ['|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+']],
  },
}

export const Ron = {
  args: {
    w: 5,
    h: 8,
    personajeId: 'RW',
    maze: [['+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+'], ['|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+'], ['|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+', ' ', ' ', '+', '-', '-', '+'], ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+']],
  },
}
