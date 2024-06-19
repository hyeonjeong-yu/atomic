import Checkbox from "./Checkbox";

const meta = {
    component: Checkbox,
    title: 'Components/Atoms/Checkbox',
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'checkbox',
        // docs: {
        //     page: mdx
        // }
    },
    argTypes: {
        label: { control: 'text'},
        checked: { control: 'boolean'}
    }
}

export default meta;

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Check me',
    checked: false,
    onChange: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
    label: 'Check me',
    checked: true,
    onChange: () => {},
};