import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { getCLS, getFID, getLCP } from "web-vitals";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);

getCLS(console.log);
getFID(console.log);
getLCP(console.log);
