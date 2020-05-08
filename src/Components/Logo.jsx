import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Logo = ({ name }) => {
  return (
    <Typography>
      <Link
        underline="none"
        color="primary"
        href="#"
        onClick={(e) => e.preventDefault}
      >
        {name}
      </Link>
    </Typography>
  );
};
export default Logo;
