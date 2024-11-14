import { RouterProvider } from "react-router-dom";
import Routers from "./routers";

export default function App() {
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={Routers}
    />
  );
}
