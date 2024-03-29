import MenuOptions from "./menu-options";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <>
      <MenuOptions defaultOpen={true} />
      <MenuOptions />
    </>
  );
};

export default Sidebar;
