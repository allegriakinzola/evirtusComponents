import ClickAway from './ClickAway';

export default {
    title: "COMPONENTS/Atoms/ClickAway",
    component: ClickAway
};

const Template = (args) => <ClickAway {...args} />;

export const Default = Template.bind();

Default.args = {
    children: (
        <ul className="min-w-fit w-[300px]">
            <li className="">First option</li>
            <li className="">Second option</li>
            <li className="">A very long option than the size of the container element</li>
        </ul>
    )
}