import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

interface IBaseLayoutProps {
  children?: ReactElement | null;
}

function BaseLayout({ children }: IBaseLayoutProps) {
  return children || <Outlet />;
}

BaseLayout.defaultProps = {
  children: null,
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
