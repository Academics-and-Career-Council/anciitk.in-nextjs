import React from "react";
import { ReactDOM } from "react";
import Comp from "./cardrow";
export default function myFunction() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Comp/>);
}