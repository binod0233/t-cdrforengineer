import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import TagManager from 'react-gtm-module'
import { useRef, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import TakeMeToTop from "../components/TakeMeToTop";
import { SSRProvider } from "react-bootstrap";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
 
  const headScroll = useRef(null);

  const scrollToTop = () => {
    headScroll.current.scrollIntoView();
  };

  const tagManagerArgs = {
    gtmId: 'GTM-KPSZLRR'
}

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
    window.__lc = window.__lc || {};
    window.__lc.license = 14286585;
    (function (n, t, c) {
      function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () {
          i(["on", c.call(arguments)]);
        },
        once: function () {
          i(["once", c.call(arguments)]);
        },
        off: function () {
          i(["off", c.call(arguments)]);
        },
        get: function () {
          if (!e._h)
            throw new Error(
              "[LiveChatWidget] You can't use getters before load."
            );
          return i(["get", c.call(arguments)]);
        },
        call: function () {
          i(["call", c.call(arguments)]);
        },
        init: function () {
          var n = t.createElement("script");
          (n.async = !0),
            (n.type = "text/javascript"),
            (n.src = "https://cdn.livechatinc.com/tracking.js"),
            t.head.appendChild(n);
        },
      };
      !n.__lc.asyncInit && e.init(), (n.LiveChatWidget = n.LiveChatWidget || e);
    })(window, document, [].slice);

  }, []);

  useEffect(()=>{

    (
      function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start':new Date().getTime(),
                    event:'gtm.js'
                  });
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KPSZLRR')
  
  },[])
  return (
    <SSRProvider>
      <div ref={headScroll}></div>
      <Socials />
      <TakeMeToTop scrollToTop={scrollToTop} />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="google-site-verification"
          content="KceQ_VgcoIBknsBsN-hHU5QZSLifvhWogYHgEZQYtzo"
        />
        
      </Head>
       

      <Header scrollToTop={scrollToTop} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
