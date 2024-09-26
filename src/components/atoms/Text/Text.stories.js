import Text from "./Text";
export default {
  title: "COMPONENTS/atoms/Text",
  component: Text ,
};

const Template = (args) => <Text  {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "The text to be displayed",
}