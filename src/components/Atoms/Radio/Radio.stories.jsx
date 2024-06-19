import Radio from "./Radio";

const meta = {
    component: Radio,
    title: 'Components/Atoms/Radio',
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Radio',
    },
    argTypes: {
        label: { control: 'text'},
        checked: { control: 'boolean'}
    }
}

export default meta;

const Template = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Option 1',
    checked: false,
    onChange: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
    label: 'Option 2',
    checked: true,
    onChange: () => {},
};