import React from 'react';
import PastaContainer from './PastaContainer';
import PizzaContainer from './PizzaContainer';


function FoodContainer () {
    
    return (
        <div>
            <div>
                <h2 className="fw-bold m-3">Hello!! Welcome to ReactRedux Kitchen !</h2>
            </div>
            <div className="d-flex justify-content-evenly p-5">
                <PizzaContainer />
                <PastaContainer />
            </div>
            
        </div>
    )
}

export default FoodContainer;