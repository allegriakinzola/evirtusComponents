import Checkbox from "./CheckBox";

export default {
  title: "COMPONENTS/atoms/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Some label",
}