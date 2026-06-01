import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./Home";
import { About } from "./About";
import { Services } from "./Services";
import { ServiceDetail } from "./ServiceDetail";
import { Careers } from "./Careers";
import { JobDetails } from "./JobDetails";
import { Contact } from "./Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/:id", Component: ServiceDetail },
      { path: "careers", Component: Careers },
      { path: "careers/:id", Component: JobDetails },
      { path: "contact", Component: Contact },
    ],
  },
]);

