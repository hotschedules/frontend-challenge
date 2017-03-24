import React from 'react';
import Styles from './top_sales.scss';

// export default TopSalesList;
//write top sales list component here
class TopSalesList extends React.Component  {
    constructor(props){
        super()
        this.state = { listItems: []}
    }
    componentWillMount(){
        var topItems = []
        var takenItems = {}
        this.props.vendors.forEach(vendor => {
            vendor.products.forEach(product => {
                if(takenItems[product.name] === undefined){
                    topItems.push({
                        name: product.name,
                        revenue:  product.order_count * (product.vendor_price.value / product.vendor_price.scale)
                    })
                    takenItems[product.name] = true;
                }
            })
        })
        
        topItems.sort((a,b) => Number(b.revenue) - Number(a.revenue) )
        this.setState({
            listItems: topItems.slice(0,10)
        })
    }
    render() {
        let items = this.state.listItems.map((item, i) => (
            <div key={i} style={{ height: '44px', display: 'flex', alignItems: 'center'}}>
                <div style={{height: '44px', width: '12%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{
                        color: 'white', 
                        borderRadius: '100%', 
                        height: '70%', 
                        width:'30.8px', 
                        backgroundColor: '#9BCA3C', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }}>{i}</div>
                </div>
                <div style={{ width: '83%', height: '44px', borderTop: '1px solid #cccccc', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div style={{fontSize: '14px' }}>{item.name}</div>
                    <div style={{ marginTop: '4px', fontSize: '10px', color: '#cccccc'}} >${item.revenue}</div>
                </div>
            </div>
        ))
        return (
            <div style={{justifyContent: 'center', alignItems: 'center', width: '40%', paddingBottom: '20px', border: '1px solid #cccccc'}}>
                <div style={{fontSize: '16px', margin: '10px 0 30px 10px'}}>Top Sales Items</div>
                {items}
            </div>
        )
    }
};

export default TopSalesList;