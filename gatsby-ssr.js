/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// Import React so that you can use JSX in HeadComponents
const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Avenir-Regular.ttf"
      as="font"
      type="font/TTF"
      crossOrigin="anonymous"
      key="avenirFont"
    />,

    // <link
    //   rel="preload"
    //   href="/fonts/Avenir-Medium.ttf"
    //   as="font"
    //   type="font/TTF"
    //   crossOrigin="anonymous"
    //   key="avenirFont"
    // />,
    // <link
    //   rel="preload"
    //   href="/fonts/Avenir-Light.ttf"
    //   as="font"
    //   type="font/TTF"
    //   crossOrigin="anonymous"
    //   key="avenirFont"
    // />,
    // <link
    //   rel="preload"
    //   href="/fonts/Avenir-Book.ttf"
    //   as="font"
    //   type="font/TTF"
    //   crossOrigin="anonymous"
    //   key="avenirFont"
    // />,
    // <link
    //   rel="preload"
    //   href="/fonts/Avenir-Black.ttf"
    //   as="font"
    //   type="font/TTF"
    //   crossOrigin="anonymous"
    //   key="avenirFont"
    // />,
  ])
}
