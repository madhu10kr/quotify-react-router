import React from "react";
import axios from "axios";
import App1 from "./random-quote";
import AddQuote from "./add-quote";
import LocalQuote from "./local-quote";
import ListAll from "./list-all"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const AppRouter = () => (
  <Router>
    <div className="container">
      <div className="col-md-12">
        <div>
          <Link className="alert alert-danger" role="alert" to="/">Random Quote(Api)</Link> | <Link className="alert alert-dark" role="alert" to="/rql">Random Quote(local)</Link> | <Link className="alert alert-danger" role="alert" to="/aq/">Add Quote</Link> | <Link className="alert alert-dark" role="alert" to="/laq">List all quotes</Link>

          <Route path="/" exact component={App1} />
          <Route path="/rql/" component={LocalQuote} />
          <Route path="/aq/" component={AddQuote} />
          <Route path="/laq/" component={ListAll} />
        </div>
      </div>
    </div>
  </Router>
);

export default AppRouter;