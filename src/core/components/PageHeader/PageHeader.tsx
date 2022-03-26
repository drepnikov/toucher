import * as React from "react";

interface ITestPageHeaderProps {}

const PageHeader: React.FC<ITestPageHeaderProps> = ({ children }) => {
    return <h1>{children}</h1>;
};

export { PageHeader };
