import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {

    
    // 1. Input Component Rendering 확인
    it('Input rendering Check', () =>{
        render(<Input type='text' placeholder='id 입력 바람' name='id' />)
        const inputElement = screen.getByTestId('input');
        expect(inputElement).toBeInTheDocument();
    })

    // 2. 사용자 입력이 반영되는지 확인
    it('Updates input value on change', () => {
        const handleChange = jest.fn();
        render(<Input type='text' onChange={handleChange}/>)
        
        const inputElement = screen.getByTestId('input');
        fireEvent.change(inputElement, { target: { value: 'id value'} })

        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(inputElement.value).toBe('id value');

    })
})