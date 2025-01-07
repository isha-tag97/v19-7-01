import React from 'react';
import './App.css';
import Model from './Model.tsx';
// bootsrap.min.css
import 'bootstrap/dist/css/bootstrap.min.css';
//bootstrap.min.js OR bundle
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Hook from './Hook.tsx';
import Newreact from './Newreact.tsx';
import Form from './Form.tsx';


//  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

function App() {
  return (
    <div>
     {/* <Model/> */}
     {/* <Hook/> */}
     {/* <Newreact/> */}
     <Form/>
    </div>
  );
}

export default App;

