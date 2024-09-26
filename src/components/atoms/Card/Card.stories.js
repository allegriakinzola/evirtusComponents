import Card from "./Card";

export default {
  title: "COMPONENTS/atoms/Card",
  component: Card,
};

const Template = (args) => <Card  {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <div className="px-4 py-3">
      Something content
    </div>
  )
}