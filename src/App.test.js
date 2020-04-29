import App from './App.svelte'
import { render } from '@testing-library/svelte'
import MockSvelteSelect from './MockSvelteSelect.svelte'

jest.mock('svelte-select', () => ({
  default: MockSvelteSelect,
}))

test('it works', () => {
  const { getByText } = render(App)
  expect(getByText('Hello')).toBeTruthy()
})
