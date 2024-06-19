import Button from './Button';
  
const meta = {
    component: Button,
    title: 'Components/Atoms/Button',
    argTypes: {
        backgroundColor: { control: 'color' }
    }
}

export default meta;

// 기본 template
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
    variant: 'default',
    size: 'medium',
    label: 'Button TEST'
}

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
    variant: 'default',
    label: 'Button TEST'

}


/*
export const Primary = {
    args: {
        backgroundColor: '',
        color: 'primary',
        variant: 'default',
        size: 'medium',
        label: 'Button TEST'
    }
}
export const Secondary = {
    args: {
        color: 'secondary',
        variant: 'default'
    }
}
*/