import Provider from "~/app/store/Provider";
import RouterApp from "~/routers/Router";
import { SWRConfig } from "swr";

export function App() {
    return (
        <SWRConfig>
            <Provider>
                <RouterApp />
            </Provider>
        </SWRConfig>
    );
}
