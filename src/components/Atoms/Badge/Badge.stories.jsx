import Badge from './Badge';
  
const meta = {
    component: Badge,
    title: 'Components/Atoms/Badge',
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'badge',
    },
    argTypes: {
        // backgroundColor: { control: 'color' }
    }
}

export default meta;

const Template = (args) => <Badge {...args} />;

export const Wait = Template.bind({});
Wait.args = {
    status: '대기',
    color: 'wait'
}

export const Approve = Template.bind({});
Approve.args = {
    status: '승인',
    color: 'approve'
};

export const Return = Template.bind({});
Return.args = {
    status: '반려',
    color: 'return'
};