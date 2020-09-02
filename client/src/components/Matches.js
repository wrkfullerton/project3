import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Matches extends Component {

    // state = {
    //     ac_annual: ''
    // }

    // componentDidMount() {
    //     const getStorage = () => {
    //         var current_annual = localStorage.getItem("ac_annual")
    //         this.setState({
    //             ac_annual: current_annual
    //         })
    //     }
    //     getStorage();
    // }





    render() {



        return (

            ///
            <div>
                <div>
                    <h1>Matches</h1>
                    <div className="matchesList">
                        {this.props.matches.length ?
                            this.props.matchSubject.map(subject => {
                                const contacted = subject.id && this.props.matches.filter(match => match.subjectId === Number(subject.id.$t))[0].contacted
                                return (
                                    subject.id &&
                                    <div key={subject.id.$t} className="matches petCard">
                                        <Link to={`matches/${subject.id.$t}`}>
                                            <img
                                                src={
                                                    subject.media.photos
                                                        ? subject.media.photos.photo[3].$t
                                                        : 'http://biorem.org/wp-content/uploads/2016/07/not-available.png'}
                                                className="petPic rounded"
                                                alt="pet profile pic"
                                            />
                                            <button
                                                className="unmatch smallIcon"
                                                onClick={(event) => {
                                                    event.preventDefault(); this.props.onUnmatch(subject, this.props.currentUser.id);
                                                }}
                                            >
                                                <FontAwesome name="heart" />
                                                <FontAwesome name="remove" />
                                            </button>
                                            <button
                                                className="emailEnvelope smallIcon"
                                                onClick={(event) => {
                                                    event.preventDefault(); this.props.onClick(this.props.currentUser, subject);
                                                }}
                                            > <FontAwesome name="envelope-o" />
                                            </button>
                                            <div id="petInfo">
                                                <h1>{subject.name.$t}</h1>
                                                <h2>{subject.animal.$t}</h2>
                                            </div>
                                        </Link>

                                    </div>
                                )
                            })
                            : <p>NO MATCHES!</p>
                        }
                    </div>
                </div>



                ///



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
            </div>
        )

    }
}

export default Matches;