import ReactDOM from "react-dom/client";
import App from "@/routes";
import "@/styles/index.css";
import "@/styles/layout.css";
import {Toaster} from "@/components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
      <App/>
        <Toaster/>
    </>
);
