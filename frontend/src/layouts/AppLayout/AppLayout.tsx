import { Outlet } from "react-router"
import s from "./styles.module.scss"
import { Navbar } from "../../components"

export const AppLayout = () => {
    return (
        <main className={s.appLayout}>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </main>
    )
}
