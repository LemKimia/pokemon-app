import ReactDOM from "react-dom/client";
import App from "@/routes";
import "@/styles/index.css";
import "@/styles/layout.css";
import {Toaster} from "@/components/ui/toaster";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "@/dev";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
        <Toaster/>
    </>
);
