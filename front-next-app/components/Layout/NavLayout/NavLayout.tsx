import {PropsWithChildren, ReactElement} from "react";
import {NextPage} from "next";
import {Layout} from "../Layout";

export const NavLayout: NextPage<PropsWithChildren> = ({children}) => {
    return <Layout showNav>{children}</Layout>
}

export const getNavLayout = (page: ReactElement) => {
    return <NavLayout>{page}</NavLayout>
}