import Timer from './Timer'

export default {
  title: 'Timer/Timer',
  component: Timer,
  tags: ['autodocs'],
  argTypes: {
    seconds: 'wall',
  },
}

export const aMinute = {
  args: {
    seconds: '60',
  },
}

export const TenMinutes = {
  args: {
    seconds: '600',
  },
}
