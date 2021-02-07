import React from "react";
import {
  Link
} from "react-router-dom";
export const Nav: React.FunctionComponent = () => (
  <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/results">Results</Link>
    </li>
  </ul>
</nav>
)