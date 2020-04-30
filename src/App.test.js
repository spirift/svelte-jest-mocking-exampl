import App from './App.svelte'
import { render } from '@testing-library/svelte'
import MockSvelteSelect from './MockSvelteSelect.svelte'
import MockSelect from 'svelte-select'

test('it works', () => {
  const { getByText } = render(App)
  expect(getByText('Hello')).toBeTruthy()
})
