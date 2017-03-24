import TopSalesList from './top_sales.component'

module.exports = {
	buyButtonReact: (vendors, element) => {
		ReactDOM.render(
			<TopSalesList vendors={vendors} />,
			element
		);
	}
}