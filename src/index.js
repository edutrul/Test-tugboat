import { getAllByPlaceholderText } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import {Example} from './Example';
import {Ejemplo} from './Input';
import {Prueba} from './State'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <Prueba/>
  {/* <Example name='Hola mundo' lastname={true}/> */}
  {/* <Ejemplo /> */}

  {/* <Button text='Click me'/>
  <Button text='Pay'/>
  <Button text='' name ='Joe'/> */}
   {/*  <UserCard
      name="Ana Perez"
      amount={3000}
      married={true}
      points={[90, 22, 2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={(function () {getAllByPlaceholderText('hello')})}
    /> */}
  </>
)
