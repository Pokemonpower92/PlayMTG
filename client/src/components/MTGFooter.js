import { Component } from 'react';
import "../styles/MTGFooter.css"

class MTGFooter extends Component {
    render() {
        return (
            <div className="MTGFooter">
                <div className="MTGFooter-brand">
                    <p>&copy;2021 PlayMTG</p>
                </div>
            </div>
        )
    }
}

export default MTGFooter;