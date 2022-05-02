import ComponetF from "./ComponentF";

import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../../App";

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <>
      {user} - {channel}
    </>
  );
};

export default ComponentE;
