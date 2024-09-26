import TextArea from "./TextArea";
export default {
  title: "COMPONENTS/atoms/TextArea",
  component: TextArea,
};

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Some label",
  placeholder: "Some placeholder",
}