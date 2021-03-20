import Head from 'next/head';

import Header from './Header';

const MainLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>WeRdevs</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default MainLayout;
