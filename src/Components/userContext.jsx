import { createContext } from "react";

const UserContext = createContext('Code Evolution');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext