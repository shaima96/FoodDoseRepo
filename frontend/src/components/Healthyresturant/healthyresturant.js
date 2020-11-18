import React, { Component } from 'react';
import axios from 'axios';

class Healthyresturant extends Component {

    constaractor(state) {

        state = {
            healthresturants: []
        };
    }

    componentDidMount() {
        axios.get('/restFind')
            // .then(({ data }) => this.setState({ healthresturants: data }))
            // .then(console.log(data))
            .then((response) => console.log(response.data))
            .catch(e => console.log(e))





    }
    render() {
        // const resturants = this.state.healthresturants.map(resturant1 => (
        //     <div key={resturant1._id}>
        //         <img src={resturant1.Image} alt="img" />
        //         <p>{resturant1.Image}</p>
        //     </div>
        // ));

        return (
            // <div className="resturants">
            //     {resturants}
            // </div>
            <h1>helllo</h1>
        );
    }

}

export default Healthyresturant;