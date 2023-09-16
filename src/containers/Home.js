// import the connect Hook from react-redux
import { connect } from "react-redux";
import Home from "../components/Home";

//import the visual component for Home
// that we want to give global state super powers to 

//make a function to map global state of cars to props

const mapStateToProps = (state) => {
    //return an object that matches the key in state.js
    return {
        cars: state.cars
    }
}
//note currying syntax also called partial application
// way to add params after the fact on a function
//              passes in function      call it on ..
export default connect(mapStateToProps)(Home)