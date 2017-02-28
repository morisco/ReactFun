import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {likesCount : 0};
        // this.onLike = this.onLike.bind(this);
    };

    // onLike () {
    //     let newLikesCount = this.state.likesCount + 1;
    //     this.setState({likesCount: newLikesCount});
    // }
    
    render() {
        return (
            <header>
                <div className="top"></div>
                <div className="heading-wrapper">
                    <a href="http://theringer.com" id="logo"><img src="public/img/logo.png" alt="The Ringer" /></a>
                    <div className="logo-wrapper">
                        <img src="/public/img/header-top-50.png" alt="The Top 50" className="top-50" />
                        <img src="/public/img/header-image-text.png" alt="Fast Food Items in America" className="header-text" />
                    </div>
                    <div className="social">
                        <a href="https://twitter.com/intent/tweet?text=The%20Ringer%20presents%20a%20definitive%20list%20of%20the%20top-50%20fast%20food%20items%20in%20America&url=https%3A//fastfood.theringer.com/" target="_blank" className="twitter">Twitter</a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//fastfood.theringer.com/" target="_blank" className="facebook">Facebook</a>
                    </div>
                </div>
                <div className="checker"></div>
            </header>
        );
    }
}

export default Header;