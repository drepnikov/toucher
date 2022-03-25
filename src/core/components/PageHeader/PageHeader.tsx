import * as React from "react";
import css from "./PageHeader.module.scss";

interface ITestPageHeaderProps {}

const PageHeader: React.FC<ITestPageHeaderProps> = ({ children }) => {
    return <h1 className={css.container}>{children}</h1>;
};

export { PageHeader };
