import App from './App.svelte'
import { render } from '@testing-library/svelte'

test('it works', () => {
  const { getByText } = render(App)
  expect(getByText('Hello')).toBeTruthy()
})
