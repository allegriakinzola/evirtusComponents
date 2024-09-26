import Image from "./Image";
export default {
  title: "COMPONENTS/atoms/Image ",
  component: Image ,
};

const Template = (args) => <Image  {...args} />;

export const Default = Template.bind({});

Default.args = {
  url: "https://m.media-amazon.com/images/I/71ki3TUSJyL._AC_UX625_.jpg"
}
