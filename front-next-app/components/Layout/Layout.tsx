import {PropsWithChildren} from "react";
import {NextPage} from "next";
import {Header} from "../Header/Header";
import {Nav} from "../Nav/Nav";
import s from "./Layout.module.scss"
import {Main} from "../Main/Main";
import {log} from "node:util";

type Props = {
    showNav?: boolean
}
export const Layout: NextPage<PropsWithChildren<Props>> = ({children, showNav = false}) => {
const style = showNav ? '' : s.gridHaveOneCol
    return (
        <div className={s.container + ' ' + style}>
            <Header/>
            {showNav && (
                <Nav/>
            )}
            <Main>{children}</Main>
        </div>
    )
}
