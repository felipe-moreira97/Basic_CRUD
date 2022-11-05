import '@testing-library/jest-dom'
import {screen,render,fireEvent} from '@testing-library/react'
import Login from './Login'
    describe('<Login />',() => {
        it('should be render', () => {
            render(<Login/>)
            expect.assertions(4)
            expect(screen.getByPlaceholderText('digite sua senha')).toBeInTheDocument()
            expect(screen.getByPlaceholderText('digite seu e-mail')).toBeInTheDocument()
            expect(screen.getByDisplayValue('Entrar')).toBeInTheDocument()
            expect(screen.getByText('Login')).toBeInTheDocument()
        })
        it('should call a fuction on submit',() => {
            const fn = jest.fn()
            render(<Login />)
            const form = screen.getByTestId('form')
            const btn = screen.getByDisplayValue('Entrar')
            form.onsubmit = fn
            fireEvent.click(btn)
            expect(fn).toHaveBeenCalledTimes(1)
        })
        it('should change the input values',() => {
            render(<Login />)
            const emailImput = screen.getByPlaceholderText('digite seu e-mail')
            const passwordInput = screen.getByPlaceholderText('digite sua senha')
            const fn = jest.fn()

        })
    })