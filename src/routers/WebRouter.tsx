import WebLayout from "~/components/Layouts/WebLayout";
import BlogPage from "~/pages/web/BlogPage";
import HomePage from "~/pages/web/HomePage";
import PokemonPages from "~/pages/web/Pokemon";

import Page404 from "~/pages/web/Page404";
import { Routes, Route } from "react-router-dom";

function WebRouter() {
    return (
        <Routes>
            <Route element={<WebLayout />}>
                <Route index element={<HomePage />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="pokemon">
                    <Route index element={<PokemonPages.Index />} />
                    <Route path=":pokemon" element={<PokemonPages.Show />} />
                </Route>
                <Route path="*" element={<Page404 />} />
                {/* <Page404 type="404" default /> */}
            </Route>
        </Routes>
    );
}
export default WebRouter;
