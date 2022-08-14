import { PageHeader } from "antd";
import React, { FC } from "react";
import Navigation from "./Navigation";

interface Props {
  children: any;
  title?: string;
  subTitle?: string;
}

const Layout: FC<Props> = ({ children, ...props}): any => {
  return (
    <div>
      <Navigation />
      <PageHeader className="jumbotron" title={props.title} subTitle={props.subTitle}/>
     <div style={{width: '85%',margin: '0 auto'}}>{children}</div>
    </div>
  );
};

export default Layout;
