import Layout from "@/components/layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "@/rtk/store";
import { useRef } from "react";
import { setProducts } from "@/rtk/slices/productsSlice";

function App({ Component, ...rest }) {
  const navBarRef = useRef(null);

  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <div>
      <Provider store={store}>
        <Layout navBarRef={navBarRef}>
          <Component {...props.pageProps} navBarRef={navBarRef} />
        </Layout>
      </Provider>
    </div>
  );
}

// App.getInitialProps = wrapper.getInitialAppProps((store) => async () => {
//   const res = await fetch("http://localhost:3000/api/products");
//   const data = await res.json();
//   store.dispatch(setProducts(data));
// });

export default wrapper.withRedux(App);
