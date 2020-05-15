import * as React from 'react';
import './BackgroundCarousel.css';

class BackgroundCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            selectedIndex:0
        }
    }

    render() {
        const {images}=this.props
        const {selectedIndex} =this.state

    }
}
export default BackgroundCarousel