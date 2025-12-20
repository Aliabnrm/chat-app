import NavbarClient from "./NavbarClient";

type Props = {
  userEmail: string;
};

const NavbarServer = ({ userEmail }: Props) => {
  return <NavbarClient userEmail={userEmail} />;
};

export default NavbarServer;
