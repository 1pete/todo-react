import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { describe, expect, it } from 'vitest'

import App from '../src/App'
import { makeStore } from '../src/app/store'

describe('App', () => {
  it('creates and completes a todo', async () => {
    const user = userEvent.setup()
    render(
      <Provider store={makeStore()}>
        <App />
      </Provider>,
    )

    expect(screen.getByText('List is empty')).toBeTruthy()

    await user.click(screen.getByRole('button', { name: 'new item' }))
    await user.type(screen.getByLabelText('Title'), 'Write tests')
    await user.click(screen.getByRole('button', { name: 'Add' }))

    expect(screen.getByText('Write tests')).toBeTruthy()
    expect(screen.getByText('due today')).toBeTruthy()

    await user.click(screen.getByLabelText('Complete Write tests'))
    expect(screen.queryByText('due today')).toBeNull()
  })
})
