import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/dashboard-dark.png";
import thumbnailUI from "../../static/images/ui.png"
import thumbnailInsights from "../../static/images/insights.png"
import thumbnailThemes from "../../static/images/themes.png"
import thumbnailManage from "../../static/images/manage.png"
import thumbnailPrivate from "../../static/images/private.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Turn your browser history into a productivity tool."/>

        <div className={"page-header home"}>
            <h1>Turn your browser history into a productivity tool</h1>
            <p>BrowserTime unlocks insights about how you spend your time on the web.<br/>Get a weekly report of your most popular sites, categories, browsing hours, and more.</p>
            <img alt={"Dashboard"} src={featureImage}/>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailUI}/>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"feature__content"}>
                                <h2>A beautiful UI</h2>
                                <p>Easily search, filter, and manage your browser history with an optimized history page.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"feature__content"}>
                                <h2>Customize</h2>
                                <p>Choose from 7 unique themes.</p>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailThemes}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailPrivate}/>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"feature__content"}>
                                <h2>No tracking</h2>
                                <p>Absolutey no tracking or invasions of privacy, ever.</p>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className={"feature__item"}>
                    <div className={"row"}>

                        <div className={"col-6 first"}>
                            <div className={"feature__content"}>
                                <h2>Manage</h2>
                                <p>Easily manage your browsing data.</p>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailManage}/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>

                         <div className={"col-6"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailInsights}/>
                            </div>
                        </div>

                         <div className={"col-6 first"}>
                            <div className={"feature__content"}>
                                <h2>Insights</h2>
                                <p>Learn how your spend your time on the web.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Add to Chrome for only $1</h2>
                    <p>Start increasing the productivity of your browsing with BrowserTime.</p>
                </div>

                <div className={"button"}>
                    <a href="https://chrome.google.com/webstore/detail/browsertime/gaafojlhhgdkcjiglocphepomogeagie/" target={"_blank"}>Add to Chrome</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
