import Alert from './Alert';
  
const meta = {
    component: Alert,
    title: 'Components/Atoms/Alert',
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Alert',
    },
    argTypes: {
        // backgroundColor: { control: 'color' }
    }
}
export default meta;

const Template = (args) => <Alert {...args} />;

export const Note = Template.bind({});
Note.args = {
    type: 'note',
    message: 'Informational Notes'
}

export const Warning = Template.bind({});
Warning.args = {
    type: 'warning',
    message: 'Warning Text Warning description'
}

export const Error = Template.bind({});
Error.args = {
    type: 'error',
    message: 'Error Text Error description'
}