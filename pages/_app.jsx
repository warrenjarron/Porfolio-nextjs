import "tailwindcss/tailwind.css"


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  AOS.init();
};

export default MyApp
