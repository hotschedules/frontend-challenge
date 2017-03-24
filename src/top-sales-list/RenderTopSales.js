import TopSalesList from './top_sales.component'

module.exports = (vendors, element) => {
	ReactDOM.render(
		<TopSalesList vendors={vendors} />,
		element
	);
}