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

export const Pending = Template.bind({});
Pending.args = {
    status: 'pending',
    message: '대기',
}

export const Approved = Template.bind({});
Approved.args = {
    status: 'approved',
    message: '승인',
};

export const Rejected = Template.bind({});
Rejected.args = {
    status: 'rejected',
    message: '반려',
};