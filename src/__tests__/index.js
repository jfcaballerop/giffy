import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

test('renders without crashing', async () => {
    render(<App />);
    const title = await screen.findByText(/Última búsqueda/i);
    expect(title).toBeInTheDocument();
});

test('Home work as expected', async () => {
    const { container } = render(<App />)
    await waitFor(() => {
        expect(container.querySelector('.Gif-link')).toBeInTheDocument()

    }
    )
});

test.only('search button when input', async () => {
    render(<App />)
    const input = await screen.findAllByRole('textbox')
    const button = await screen.findAllByRole('button')

    fireEvent.change(input, { target: { value: 'Matrix' } })
    fireEvent.click(button)

    const title = await screen.findAllByText('Matrix')
    expect(title).toBeVisible()
})
