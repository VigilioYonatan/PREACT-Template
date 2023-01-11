import { render } from "preact";
import { App } from "./app";
import "./index.css";
import "preact/devtools";
render(
    <App />,
    document.getElementById("app") as HTMLElement
);
