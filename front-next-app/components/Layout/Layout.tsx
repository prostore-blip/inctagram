import {PropsWithChildren} from "react";
import {NextPage} from "next";
import {Header} from "../Header/Header";

export const Layout: NextPage<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            <main>{children}</main>
        </div>
    )
}
