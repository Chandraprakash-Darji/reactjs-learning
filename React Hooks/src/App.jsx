import { createContext } from "react";
import ComponentC from "./components/Context API/ComponetnC";

export const UserContext = createContext();
export const ChannelContext = createContext();

export default function App() {
  return (
    <div>
      <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"Code Evaolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
