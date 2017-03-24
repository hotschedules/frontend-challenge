import React from 'react';
import ReactDOM from 'react-dom';
import TopSalesList from "../../dist/TopSalesList/index.js";
import transformData from "../../dist/Utils/transformData.js";
import request from 'request';

request.get('http://localhost:3000/PurchaseOrders', function (error, response, body) {
  console.log('body:', body.length, JSON.parse(body)); 
  ReactDOM.render(<TopSalesList vendors={JSON.parse(body)}/>, document.getElementById('app'));
});


