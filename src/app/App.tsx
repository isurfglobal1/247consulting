import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider key="v4-router-force-remount" router={router} />
    </LanguageProvider>
  );
}
