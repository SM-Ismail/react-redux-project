import React from 'react';
import { buyPasta } from '../redux';
import { connect } from 'react-redux';

const PastaContainer = (props) => {
    return (
        <div>
             <div class="card" style={{width: "18rem"}}>
                <img src="https://i.ibb.co/dgxyZzY/pasta.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Redux Chicken PASTA</h5>
                    <p class="card-text">Takes your state to a unknown world of Joy!! And Holds your state there!</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">chicken</li>
                    <li class="list-group-item">cheese</li>
                    <li class="list-group-item"> Only at BDT 500</li>
                </ul>
                <div class="card-body">
                    <button className = "btn btn-lg btn-warning" onClick={props.buyPasta}> Buy Now </button>
                </div>
            </div>
            <div>
                YOU ordered {props.numOfPasta} Pastas!
            </div>
        </div>
    );
};
const mapStateToProps = (state) =>{
    return {
       numOfPasta: state.pasta.numOfPasta
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyPasta: () => dispatch(buyPasta())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastaContainer);