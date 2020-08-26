import {Link} from "gatsby"
import React from "react"
import logo from "../../static/images/logo.png"

const Header = () => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"BrowserTime"}>
                        <img alt={"Logo"} src={logo}/>
                    </Link>
                </div>

                <div className={"get-started"}>
                    <a href={"https://chrome.google.com/webstore/detail/browsertime/gaafojlhhgdkcjiglocphepomogeagie/"}>Add to Chrome for $1</a>
                </div>
            </div>
        </div>
    </header>
)

export default Header
