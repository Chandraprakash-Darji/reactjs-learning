import React from "react";
import { ChannelContext, UserContext } from "../../App";

const ComponetF = () => {
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <ChannelContext.Consumer>
            {(channel) => (
              <div>
                Channel Context value {channel}
                ,User Context value {user}
              </div>
            )}
          </ChannelContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ComponetF;
