import { Meta, Story } from '@storybook/react/types-6-0'
import { text, withKnobs } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS, Styled Components'
    )}
  />
)

export const Secondary: Story = () => (
  <Main
    title={text('Título', 'React Avançado123')}
    description={text(
      'Descrição',
      'TypeScript, ReactJS, NextJS, Styled Components'
    )}
  />
)
