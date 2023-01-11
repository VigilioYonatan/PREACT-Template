import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "preact/compat";

const WebRouterLazy = lazy(() => import("./WebRouter"));
const AdminRouterLazy = lazy(() => import("./AdminRouter"));

function RouterApp() {
    const authenticaded = false;
    return (
        <Suspense fallback={<h1>Cargando..</h1>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<WebRouterLazy />} />
                    {authenticaded ? (
                        <Route path="/admin/*" element={<AdminRouterLazy />} />
                    ) : null}
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default RouterApp;
