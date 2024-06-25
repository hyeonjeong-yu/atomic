import Text from './Text';
  
const meta = {
    component: Text,
    title: 'Components/Atoms/Text',
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'text',
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

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {

};