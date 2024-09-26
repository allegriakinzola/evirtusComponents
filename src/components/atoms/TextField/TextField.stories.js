import TextField from "./TextField";

export default {
  title: "COMPONENTS/atoms/TextField",
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: "Some placeholder",
  label: "Some label",
}