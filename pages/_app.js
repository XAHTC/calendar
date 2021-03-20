import { Provider } from 'react-redux';
import '../styles/style.scss';

import store from '../redux';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
