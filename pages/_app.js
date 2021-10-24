import '../styles/globals.css'
// import '../styles/tailwind.css'


function MyApp({ Component, pageProps }) {
  localStorage.setItem("token","90042c18ba8d8c0c5a2f1385681d99eac5b55a153c7c3eb08f7e29566e5ba545")
  return <Component {...pageProps} />
}

export default MyApp
