import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CheckboxGroup from './CheckboxGroup';

// Mock Options test data
const mockOptions = [
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' },
]

describe('Checkbox', () => {
    // 1. CheckboxGroup Component Rendering 확인
    it('Checkbox rendering Correctly', () =>{
        const handleChange = jest.fn();
        render(<CheckboxGroup options={mockOptions} onChange={handleChange} />)

        const checkboxGroup = screen.getByLabelText('전체 선택/해제');
        expect(checkboxGroup).toBeInTheDocument();

        mockOptions.forEach((option) => {
            const checkboxLabel = screen.getByLabelText(option.label)
            expect(checkboxLabel).toBeInTheDocument();
        })
    })

    // 2. 전체 선택/해제 기능이 올바르게 동작하는지 확인
    /*
    it('All check on Click', () => {
        const allCheck = jest.fn();
        render(<CheckboxGroup options={mockOptions} onChange={allCheck}/>)

        const selectAll = screen.getByLabelText('전체 선택/해제');

        fireEvent.click(selectAll);
        expect(allCheck).toHaveBeenCalled();
        // 특정 인자들과 함께 호출되었는지 확인
        expect(allCheck).toHaveBeenCalledWith({
            option1: true,
            option2: true,
            option3: true
        });

        fireEvent.click(selectAll);

        expect(allCheck).toHaveBeenCalledTimes(2);
        expect(allCheck).toHaveBeenCalledWith({
            option1: false,
            option2: false,
            option3: false
        });
    })
    */

    // 3. 개별 체크박스 선택 기능이 올바르게 동작하는지 확인
})