import { Outlet, NavLink, NavLinkProps } from "react-router-dom";

function WebLayout() {
    return (
        <>
            <header>
                <div className="container flex items-center justify-between px-2">
                    <h1 className="text-2xl text-white font-bold">Preact</h1>
                    <nav className="flex gap-3 items-center">
                        <NavLink
                            to={"/"}
                            className={({ isActive }: NavLinkProps) =>
                                `text-white text-xs ${
                                    isActive ? "text-yellow-600" : ""
                                } `
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={"/blog"}
                            className={({ isActive }: NavLinkProps) =>
                                `text-white text-xs ${
                                    isActive ? "text-yellow-600" : ""
                                } `
                            }
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to={"/pokemon"}
                            className={({ isActive }: NavLinkProps) =>
                                `text-white text-xs ${
                                    isActive ? "text-yellow-600" : ""
                                } `
                            }
                        >
                            Pokemons
                        </NavLink>
                        <NavLink
                            to={"/admin"}
                            // text-yellow-600
                            className={({ isActive }: NavLinkProps) =>
                                `text-white text-xs ${
                                    isActive ? "text-yellow-600" : ""
                                } `
                            }
                        >
                            Admin
                        </NavLink>
                    </nav>
                </div>
            </header>
            <Outlet />
            <footer>this is a footer</footer>
        </>
    );
}

export default WebLayout;
