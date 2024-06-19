import CheckboxGroup from "./CheckboxGroup";

const meta = {
    component: CheckboxGroup,
    title: 'Components/Molecules/CheckboxGroup',
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'CheckboxGroup',
    },
    argTypes: {
        options: {
            control: 'array'
        },
    }
}

export default meta;

const Template = (args) => <CheckboxGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
    options: [
        { label: 'Option 1', value: 'Option 1' },
        { label: 'Option 2', value: 'Option 2' },
        { label: 'Option 3', value: 'Option 3' },
        { label: 'Option 4', value: 'Option 4' },
    ],

    onChange: (checkedItems) => console.log('Changed: ', checkedItems)
};