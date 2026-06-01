import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return <RouterProvider key="v4-router-force-remount" router={router} />;
}
