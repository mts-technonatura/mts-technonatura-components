import { addDecorator } from '@storybook/react';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story) => (
    <ThemeProvider>
      <CSSReset />
      <Story />
    </ThemeProvider>
  ),
];
