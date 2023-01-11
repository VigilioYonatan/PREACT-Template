import {Outlet} from "react-router-dom"


function AdminLayout() {
    return (
        <>
            <header>admin Header</header>
            <Outlet/>
            <footer>footer</footer>
        </>
    );
}

export default AdminLayout;
