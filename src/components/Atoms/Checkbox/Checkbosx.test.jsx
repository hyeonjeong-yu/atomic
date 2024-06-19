import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
    // 1. Checkbox Component Rendering 확인
    it('Checkbox rendering Correctly', () =>{
        render(<Checkbox label='Check me' checked={false} />)
        const checkboxElement = screen.getByTestId('checkbox');
        expect(checkboxElement).toBeInTheDocument();
        expect(checkboxElement.checked).toBeFalsy();
    })

    // 2. check 동작을 검증하여 올바르게 상태가 변하는지 확인
    it('Changes value on Click', () => {
        const handleChange = jest.fn();
        render(<Checkbox label='Check me' checked={false} onChange={handleChange}/>)

        const checkboxElement = screen.getByTestId('checkbox');
        fireEvent.click(checkboxElement);

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(checkboxElement.checked).toBeTruthy();

    })
})