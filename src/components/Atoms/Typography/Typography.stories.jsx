import Typography from './Typography';
  
const meta = {
    component: Typography,
    title: 'Components/Atoms/Typography',
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'typography',
    },
    argTypes: {
        variant: {
            type: 'select',
            options: [
                'display1',
                'display2',
                'display3',
                'headline1',
                'headline2',
                'headline3',
                'headline4',
                'title1',
                'title2',
                'title3',
                'body1',
                'body2',
                'body3',
                'body4',
                'body5',
                'label1',
                'label2',
                'label3',
            ]
        }
    }
}

export default meta;

const Template = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {

};