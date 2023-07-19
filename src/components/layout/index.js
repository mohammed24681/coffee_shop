import { Suspense } from "react";
import NavBar from "../navbar";
import NextNProgres from "nextjs-progressbar";

function Layout(props) {
  return (
    <div>
      <NextNProgres color="#bc9667" options={{ showSpinner: false }} />
      <NavBar navBarRef={props.navBarRef} />
      {props.children}
    </div>
  );
}

export default Layout;
