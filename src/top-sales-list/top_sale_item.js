import React from 'react';

const top_sale_item = ({ revenue, name, i }) => {
	const { columnFlex, alignCenter, greenBadge } = styles
	return(
	  <div key={i} style={{ height: '44px', ...alignCenter,}}>
				<div style={{height: '44px', width: '12%',  ...alignCenter, justifyContent: 'center'}}>
						<div style={{ ...greenBadge, ...alignCenter, justifyContent: 'center'}}>{i + 1}</div>
				</div>
				<div style={{ width: '83%', height: '44px', borderTop: '1px solid #cccccc', ...columnFlex}}>
						<div style={{fontSize: '14px' }}>{name}</div>
						<div style={{ marginTop: '4px', fontSize: '10px', color: '#cccccc'}} >${revenue}</div>
				</div>
		</div>
	)
}

const styles = {
    columnFlex: {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center'
    },
    alignCenter: {
        display: 'flex', 
        alignItems: 'center'
    },
    greenBadge: {
        color: 'white', 
        borderRadius: '100%', 
        height: '70%', 
        width:'30.8px', 
        backgroundColor: '#9BCA3C'
    }
}

export default top_sale_item;