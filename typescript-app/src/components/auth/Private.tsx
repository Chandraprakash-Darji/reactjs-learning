import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  RenderComponent: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, RenderComponent }: PrivateProps) => {
  return <>{isLoggedIn ? <RenderComponent name="Rega"/> : <Login />}</>;
};

export default Private;
