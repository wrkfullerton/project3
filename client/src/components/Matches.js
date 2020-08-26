import React, { Component } from 'react';

class Matches extends Component {

    state = {
        ac_annual: ''
    }

    componentDidMount() {
        const getStorage = () => {
            var current_annual = localStorage.getItem("ac_annual")
            this.setState({
                ac_annual: current_annual
            })
        }
        getStorage();
    }

    render() {

        const MTC = this.state.ac_annual * 1558.8 * 0.0004536 * 0.001

        const acres = MTC / 0.765

        const coal = MTC * 1103.4

        const waste = MTC / 2.9375

        return (
            <div className="matches">
                <div className="row">
                    <div className="container mt-5">
                        <div className="card bg-light">
                            <div className="card-body mb-3">
                                <h2 className="card-title text-center">Matches</h2>
                                <p className="card-text text-center">Add more here <strong className="bold"></strong> </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card bg-light col-sm m-3">
                                <div className="card-body">
                                    <h5 className="card-title">Add 1</h5>
                                    <p className="card-text"><strong className="bold"></strong> Add </p>
                                    <p className="card-text text-center"><i className="fas fa-tree fa-5x"></i> <i className="fas fa-tree fa-5x"></i></p>
                                    <p className="card-text">Add More </p>
                                </div>
                            </div>
                            <div className="card bg-light col-sm m-3">
                                <div className="card-body">
                                    <h5 className="card-title">Add 2</h5>
                                    <p className="card-text"><strong className="bold"></strong>Add </p>
                                    <p className="card-text text-center"><i className="fas fa-truck fa-5x"></i> <i className="fas fa-recycle fa-5x"></i></p>
                                    <p className="card-text">Add more </p>
                                </div>
                            </div>
                            <div className="card bg-light col-sm m-3">
                                <div className="card-body">
                                    <h5 className="card-title">Add  3</h5>
                                    <p className="card-text"><strong className="bold"></strong> Add </p>
                                    <p className="card-text text-center"><i className="fas fa-fire fa-5x"></i> <i className="fas fa-fire fa-5x"></i></p>
                                    <p className="card-text">Add more </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Matches;