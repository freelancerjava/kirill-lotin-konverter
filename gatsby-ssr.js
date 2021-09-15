/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// gatsby-ssr.js
const React = require('react')
const { oneLine } = require('common-tags')

exports.onRenderBody = ({ setHeadComponents }) => {
    const GST_ID = 'G-DY64YBCP1E'
    if (process.env.NODE_ENV === `production`) {
        setHeadComponents([
            <script
                key="google-gst-js"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GST_ID}`}
            />,
            <script
                key="google-gst-init"
                dangerouslySetInnerHTML={{
                    __html: oneLine`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GST_ID}');
                    `,
                }}
            />,
        ])
    }
}
