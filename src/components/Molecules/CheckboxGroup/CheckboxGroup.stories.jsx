import CheckboxGroup from "./CheckboxGroup";

const meta = {
    component: CheckboxGroup,
    title: 'Components/Molecules/CheckboxGroup',
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'CheckboxGroup',
    },
    argTypes: {
        onchange: {
            action: 'changed'
        }
    }
}

export default meta;

const Template = (args) => <CheckboxGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { label: '옵션 1', value: 'option1' },
        { label: '옵션 2', value: 'option2' },
        { label: '옵션 3', value: 'option3' },
        { label: '옵션 4', value: 'option4' },
    ],
};