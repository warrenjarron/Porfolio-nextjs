import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="fr">
    <Head>
   
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
        
        {/* font raleway */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        {/* font great vibes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />

        {/* AOS anime */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

<script defer src="https://unpkg.com/aos@next/dist/aos.js%22%3E" />
<script defer>AOS.init();</script>


<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap" rel="stylesheet"/>

   </Head>
      <body className="font-josefin bg-slate-900 overflow-x-hidden p-5">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
