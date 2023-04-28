// HelloWorld.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';

import HelloWorld from './HelloWorld.vue';

const meta: Meta<typeof HelloWorld> = {
  title: 'HelloWorld',
  component: HelloWorld
};

export default meta;
type Story = StoryObj<typeof HelloWorld>;

export const Main: Story = {
  render: (args) => ({
    components: { HelloWorld },
    setup() {
      return { args };
    },
    template: '<HelloWorld v-bind="args" />'
  }),
  args: {
    msg: 'Storybooks Works'
  }
}