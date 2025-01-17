import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Contact</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-7"}>
                        <p>We take our commitment to our users seriously. If you need help or have questions about how to use BrowserTime, or if you just want to leave some feedback, please do not hesitate to contact us.</p>
                    </div>

                    <div className={"col-5"}>
                        <div className={"contact-items"}>
                            <p>Plain email is the best way to contact us.</p>
                            <h2>support@browsertime.us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
