import React from 'react';
import { buyPizza } from '../redux';
import { connect } from 'react-redux';
const PizzaContainer = (props) => {
    
    return (
        <div>
            <div class="card" style={{width: "18rem"}}>
                <img src="https://i.ibb.co/gZmB6C7/pizza.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Redux Chicken PIZZA</h5>
                    <p class="card-text">Takes your state to a unknown world of Joy!! And Holds your state there!</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">chicken</li>
                    <li class="list-group-item">cheese</li>
                    <li class="list-group-item"> Only at BDT 500</li>
                </ul>
                <div class="card-body">
                    <button className = "btn btn-lg btn-warning" onClick={props.buyPizza}> Buy Now </button>
                </div>
            </div>
            <div>
                YOU ordered {props.numOfPizza} Pizzas!
            </div>
        </div>
    );
};
const mapStateToProps = (state) =>{
    return {
       numOfPizza: state.pizza.numOfPizza
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyPizza: () => dispatch(buyPizza())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);