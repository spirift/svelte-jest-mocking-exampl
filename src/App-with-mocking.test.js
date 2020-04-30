import App from './App.svelte'
import { render } from '@testing-library/svelte'
import MockSvelteSelect from './MockSvelteSelect.svelte'
import Select from 'svelte-select'

 // The one below will give this error: TypeError: Cannot read property 'fragment' of undefined
 // Select is a mock constructor function in this instance
// jest.mock('svelte-select')

// The solution below results in TypeError: Cannot read property 'default' of undefined
// Code doesn't even get far enough to log Select
// This one should really work as this is correct for an esModule mock
// jest.mock('svelte-select', () => MockSvelteSelect)


// The one below results in this error: TypeError: Select is not a constructor
// Select is undefined
// jest.mock('svelte-select', () => {
//   return function () {
//     return MockSvelteSelect
//   }
// })


// This one results in: TypeError: Cannot read property 'default' of undefined
// Code doesn't get far enough to log Select
// Interestingly this solution works if we use require (rather than import) `require('svelte-select').default
// jest.mock('svelte-select', () => ({
//   default: MockSvelteSelect
// }))


// This one seems to render the mock component twice, one correctly and one at the very end of the body
// Select is Function Select as well as a mock
// jest.mock('svelte-select')
// Select.mockImplementation(() => new MockSvelteSelect({ target: document.body }))


// This one works but it's very over engineered. There must be a better way.
jest.mock('svelte-select')
Select.mockImplementation(() => {
  const element = document.createElement("div")
  element.className = 'svelte-mocker'
  document.body.append(element)
  const Node = new MockSvelteSelect({ target: document.body.querySelector('.svelte-mocker') })
  document.body.querySelector('.svelte-mocker').remove()
  return Node
})



test('The mock module is correctly replacing the real one', () => {
  const { getByText, debug } = render(App)
  expect(getByText('Mocked Svelte Select')).toBeTruthy()
})
