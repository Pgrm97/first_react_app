import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent'

class Menu extends Component {
    //Always required when creating a component.
    constructor(props) {
        super(props);

        //Stores properties related to a component.
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish){
        this.setState( { selectedDish: dish } );
    }

    render() {
        //When an object is defined within a state, it must be called so when used. this.state...
        const menu = this.props.dishes.map((dish) => {
            //mt-5 means give top margin of 5 units.
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return ( 
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <DishDetail dish= {this.state.selectedDish}></DishDetail>
            </div>
        );
    }
}

export default Menu;