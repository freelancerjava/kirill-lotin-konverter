import React, { Component } from 'react'

class MyLeaderBoardAd extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

    render() {
        return (
            <section id='ads'>
                <ins class="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-1605687623825790"
                    data-ad-slot="9272316480"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </section>)
    }
}

export default MyLeaderBoardAd
