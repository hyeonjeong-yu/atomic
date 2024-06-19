import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('Button 렌더링 확인', () =>{
        render(<Button size='medium' label='Button' />)
    })
})