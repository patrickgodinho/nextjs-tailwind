import '../styles/tailwind.css';

function MyApp({Component, pageProps}) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="py-px flex flex-col flex-1">
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp
