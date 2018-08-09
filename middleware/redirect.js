export default function({ route: { fullPath }, redirect, store: { state: { isLogin } } }) {
    if (fullPath == '/') {
        return redirect('/satin')
    } else if (fullPath == '/my' && !isLogin) {
        return redirect(`/login?fromPage=${fullPath}`)
    }
}