import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Home from "./pages/Home";
import Result from "./pages/Result";
import Product from "./pages/Product";
import { loadStripe } from '@stripe/stripe-js'
import { cartProvider } from 'use-shopping-cart';

const queryClient = new QueryClient();

const stripePromise = loadStripe('pk_test_7jw7MF9NnrUcMn19sw6yvLuK00fCRlTeAH');

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <CartProvider
      mode="checkout-session"
      stripe={stripePromise}
      currency="USD"
    >
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/result" component={Result} />
      <Route path="/:productId" component={Product} />
      </Switch>
    </BrowserRouter>
    <CartProvider />
    </QueryClientProvider>
  )
}

export default App;
