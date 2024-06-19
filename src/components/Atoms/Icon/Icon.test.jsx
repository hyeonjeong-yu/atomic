import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('Icon', () => {
    it('특정 props에 따른 아이콘 확인', () =>{
        render(<Icon iconType='Heart'/>)
        const icon = screen.getByTestId('icon');
        expect(icon).toBeInTheDocument();
    })
})