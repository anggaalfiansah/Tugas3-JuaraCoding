import React, { Component } from 'react';

class Home extends Component {
    componentDidMount(){
        this.props.navAktifSet(["active disabled","","",""]);
    }
    render() {
        return (
            <div className="mx-auto py-5 px-5 py-3 border border-secondary bg-light shadow rounded">
                Ini Home
            </div>
        );
    }
}

export default Home;