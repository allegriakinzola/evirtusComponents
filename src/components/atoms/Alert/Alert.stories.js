import Alert from "./Alert";

export default {
  title: "COMPONENTS/atoms/Alert ",
  component: Alert,
};

const Template = (args) => <Alert  {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: "default",
  message: "Some alert message ..."
}