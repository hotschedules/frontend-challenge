# HotSchedules Front-end Engineering Challenge

## Task

Your job will be to create a component that is usuable in React, jQuery, and Angular

Component requirements:

1. Display the top 10 selling products in order from most sold to least. 
2. Display the revenue of each product.

Your awesome mocks for the component:

[Mocks](https://drive.google.com/file/d/0B7KmJIsOVjr6YTcwMC11bTBnVGs/view?usp=sharing)

(Don't stress on being pixel perfect.)

The backend team exposes an api:

* The route '/PurchaseOrders' returns the latest PurchaseOrders
* Each PurchaseOrder has an array of products PurchaseOrder.products
* each Product has an order_count and vendor_price property which can be used to calculate revenue

*hint* - revenue = Product.order_count * (Product.vendor_price.value / Product.vendor_price.scale)

*note* - You will notice vendor_price is an object with three properties: code, value, and scale. Code
is the type of currency. For performance reasons we don't save numbers with decimal points in the database. Instead,
the scale property holds the exponent of 10 by which to divide the value property by. So for example,
{value: 1000, scale: 2} is equivalent to 1000 / 10^2 => 1000 / 100 => $10.00.

## Getting Started 

Clone this repo.

`git clone https://github.com/15chrjef/frontend-challenge/`

Install. Set up npm if needed (http://blog.teamtreehouse.com/install-node-js-npm-mac).

`npm install`

Install global packages

`npm install webpack -g`

`npm install json-server -g`

Start your mock server

`json-server --watch ./data/db.json`

In separate terminal window use webpack to build your library as well as sandbox app.  

Webpack is a module bundler that bundles all your code into one file and compiles it
from Javascript ES6 to Javascript ES5.

`npm run build`

The build will re-run everytime you update your source. To view the Project navigate to test-app/react_app.html open html file in browser.

Props for the component

Pass the component its venders through a prop called 'vendors'. 'vendors' should be an array of objects that each map to  a vendor that map to an array of sold items which map to item information. 
The path should look as follows 
VendorList -> Vendor -> Items -> Item -> ItemInformation
The VendorList specified ^ will be referred to as {VENDORDATA} from now on.

*For React*

	
	import TopSalesList from ./{PATH}/top-sales-list/top-sales.component.js
	ReactDOM.render(<TopSalesList vendors={ {VENDORDATA} }/>, document.getElementById('app'));

*For  jQuery*

Add script to the component's dom rendering function from {Path}/top-sales-list/jQueryFunction in your HTML page
	`<script src="./{Path}/top-sales-list/jQueryFunction.js"></script>`

Create a HTML container for the component

	var listContainer = $('<span class="list-container"></span>');

Then Call the component's dom rendering function

	
	import RenderTopSales from './{PATH}/RenderTopSales'
	RenderTopSales(vendors, listContainer);
	

*For Angular*

	npm i --save ngreact
look up the docs at https://github.com/ngReact/ngReact for general clarification on the module

Include the 'react' Angular module in your html index file

	<script>
    angular.module('app', ['react']);
	</script>

Use with 'react-component' Directive

```
angular.module('app', ['react'])
.controller('listController', 
	function($scope) { 
		$scope.vendors = {VENDORDATA};
	}
);
```

Usage with the TopSalesList component

	import TopSalesList from ./{PATH}/top-sales-list/top-sales.component.js
	app.value('listComponent', <TopSalesList vendors={$scope.vendors} /> );

Angular view

	<body ng-app="app">
		<div ng-controller="listController">
			<react-component name="listComponent" props="vendors" watch-depth="reference"/>
		</div>
	</body>

as the ngreact docs state...

name attribute checks for an Angular injectable of that name and falls back to a globally exposed variable of the same name
props attribute indicates what scope properties should be exposed to the React component
watch-depth attribute indicates what watch strategy to use to detect changes on scope properties. The possible values for react-component are reference, collection and value (default)

Enjoy!