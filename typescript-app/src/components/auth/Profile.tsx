export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile component {name}</div>;
};

export default Profile;
