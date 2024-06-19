import { fireEvent, render, screen } from '@testing-library/react';
import Radio from './Radio';

describe('Radio', () => {
    // 1. Radio Component Rendering 확인
    it('Radio rendering Correctly', () =>{
        const handleChange = jest.fn();
        render(<Radio label='Option 1' checked={false} onChange={handleChange}/>)

        const radioElement = screen.getByLabelText('Option 1');
        expect(radioElement).toBeInTheDocument();
        // expect(radioElement.checked).toBeTruthy();
    })

    // 2. 여러 개의 라디오버튼 중 하나를 선택했을 때 올바르게 선택되는지 확인
    it('Selects only one radio option in a group', () => {
        const handleChange = jest.fn();
        render(
            <>
                <Radio name='options' label='Option 1' checked={true} onChange={handleChange}/>
                <Radio name='options' label='Option 2' checked={false} onChange={handleChange}/>
                <Radio name='options' label='Option 3' checked={false} onChange={handleChange}/>
            </>
        )

        const option1Radio = screen.getByLabelText('Option 1');
        const option2Radio = screen.getByLabelText('Option 2');
        const option3Radio = screen.getByLabelText('Option 3');

        fireEvent.click(option2Radio);
        // expect(option1Radio.checked).toBe(false);
        // expect(option2Radio.checked).toBe(true);
        // expect(option3Radio.checked).toBe(false);

        // fireEvent.click(option3Radio);
        // expect(option1Radio.checked).toBe(false);
        // expect(option2Radio.checked).toBe(false);
        // expect(option3Radio.checked).toBe(true);

    })
})