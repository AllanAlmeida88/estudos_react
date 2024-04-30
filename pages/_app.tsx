import '../app/globals.css'
export default function app(props: any) {
    const {Component, pageProps} = props
    return <Component {...pageProps} />
}