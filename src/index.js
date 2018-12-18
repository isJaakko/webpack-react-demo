import React from "react";
import { render } from "react-dom";
import App from './router';

render(<div>
    { App() }
</div>, document.getElementById("app"));