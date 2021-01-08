import { FC } from "react";

interface Props {
    Component: any;
    pageProps: any;
}

const App: FC<Props> = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    );
};

export default App;