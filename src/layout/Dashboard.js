import React from 'react'

import Categories from './Categories'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import { Grid} from 'semantic-ui-react'
import { Route } from 'react-router'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
    return (
        <div>
            <Grid>              
                <Grid.Row columns={2}> 
                    <Grid.Column width={4}> <Categories/> </Grid.Column>    
                    <Grid.Column width={12}>
                        <Route exact path="/" component={ProductList}/>
                        <Route exact path="/products" component={ProductList}/>
                        <Route path="/products/:name" component={ProductDetail}/>
                        <Route exact path="/cart" component={CartDetail}/>
                    </Grid.Column>    
                </Grid.Row>
           </Grid>
        </div>
    )
}
