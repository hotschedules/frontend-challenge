import React from 'react';
import Styles from './top_sales.scss';
import TopSaleItem from './top_sale_item'
class TopSalesList extends React.Component  {
    constructor(props){
        super()
        this.state = { listItems: [] }
    }
    //gets vendor items sorts them by price and sets the 10 most ordered to state
    componentWillMount(){
        var topItems = []
        var takenItems = {}
        this.props.vendors.forEach(vendor => {
            vendor.products.forEach(product => {
                if(takenItems[product.name] === undefined){
                    topItems.push({
                        name: product.name,
                        revenue:  product.order_count * (product.vendor_price.value / product.vendor_price.scale),
                        count: product.order_count
                    })
                    takenItems[product.name] = true;
                }
            })
        })
        topItems.sort((a,b) => Number(b.order_count) - Number(a.order_count) )
        this.setState({
            listItems: topItems.slice(0,10)
        })
    }
    render() {
        const { columnFlex, alignCenter, greenBadge } = styles
        let items = this.state.listItems.map((item, i) => (
            <TopSaleItem revenue={item.revenue} key={i} i={i} name={item.name}/>
        ))
        return (
            <div style={{ width: '40%', paddingBottom: '20px', border: '1px solid #cccccc'}}>
                <div style={{fontSize: '16px', margin: '10px 0 30px 10px'}}>Top Sales Items</div>
                {items}
            </div>
        )
    }
};

const styles = {
    columnFlex: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center'
    },
    alignCenter: {
        display: 'flex', 
        alignItems: 'center'
    }
}

export default TopSalesList;