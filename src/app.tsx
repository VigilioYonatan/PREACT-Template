import Provider from "~/app/store/Provider";
import RouterApp from "~/routers/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function App() {
    const client = new QueryClient();
    return (
        <Provider>
            <QueryClientProvider client={client}>
                <RouterApp />
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-right"
                />
            </QueryClientProvider>
        </Provider>
    );
}
