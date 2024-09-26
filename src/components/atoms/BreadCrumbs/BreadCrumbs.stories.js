import BreadCrumbs from "./BreadCrumbs";

export default {
  title: "COMPONENTS/atoms/BreadCrumbs ",
  component: BreadCrumbs,
};

const Template = (args) => <BreadCrumbs  {...args} />;

export const Default = Template.bind({});

Default.args = {
  list: [
    {
      id: 1,
      label: "Main page",
      link: "/"
    },
    {
      id: 2,
      label: "Second page",
      link: "/"
    },
    {
      id: 3,
      label: "Third page",
      link: "/"
    },
  ]
};