import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute ,IndexRedirect,Redirect,Link} from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

import App from '../components/App';
import Index from '../components/Index';
import Basicproxy from '../components/Basicproxy';
import Proxytype from '../components/Proxytype';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		  <Router history={history}>
		    <Route name="app" breadcrumbName="首页" path="/" component={App}>
					<IndexRedirect to="index.html" />
	        <Route name="index" breadcrumbName="首页导航" path="index.html"
	          component={Index} />
					<Route name="basicproxy" breadcrumbName="代理设置 - 基本设置" path="basicproxy.html"
			          component={Basicproxy} />
					<Route name="proxytype" breadcrumbName="代理设置 - 商户分类" path="proxytype.html"
				        component={Proxytype} />
	      </Route>
		  </Router>
	</Provider>
, $("#content")[0]);
