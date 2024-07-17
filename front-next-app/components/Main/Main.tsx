import s from "./Main.module.scss"
import {NextPage} from "next";
import {PropsWithChildren} from "react";

export const Main: NextPage<PropsWithChildren> = ({children}) => (
    <div className={s.main}>
        {children}
    </div>
)

