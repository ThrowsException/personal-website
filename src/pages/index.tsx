import * as React from "react";

export default () => {
  return (
    <React.Fragment>
      <h1>Welcome</h1>
      <p>It's not much, but it's mine</p>
      <ul>
        <li>
          <a href="https://github.com/ThrowsException">
            Github: ThrowsException
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/throwsexception">
            LinkedIn: ThrowsException
          </a>
        </li>
        <li>
          <a href="https://www.aweber.com">
            I work at AWeber, Working on Python and React.
          </a>
        </li>
      </ul>
      <div>
        <p>StackExchange</p>
        <a href="https://stackexchange.com/users/1239824">
          <img
            src="https://stackexchange.com/users/flair/1239824.png"
            width="208"
            height="58"
            alt="profile for ThrowsException on Stack Exchange, a network of free, community-driven Q&amp;A sites"
            title="profile for ThrowsException on Stack Exchange, a network of free, community-driven Q&amp;A sites"
          />
        </a>
      </div>
    </React.Fragment>
  );
};
