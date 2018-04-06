# Orca

Framework based on Node.js

<p align="center">
  <img src="https://amaskiphire.s3-eu-west-1.amazonaws.com/uploads/amawaste/ORCA/ORCA-LOGO-in-isolation.png">
</p>

<h2>Get started</h2>

**Dependencies required**

<p> To run the project, you need the following node modules</p>
<ul>
  <li>colors</li>
  <li>get-stdin</li>
  <li>minimist</li>
  <li>mkdirp</li>
</ul>

<code>$ npm i --save colors get-stdin minimist mkdirp</code>


**Get the Core**

<code>$ git clone https://github.com/sylvainSUPINTERNET/Orca_Framework.git</code>

**Structure**
<h4>root directory default : ./Orca_Framework-master (rename this with your project name) </h4>
<ul>
  <li>console
    <ul>
      <li>bin.js : Parse arguments from CLI and execute generator actions</li>
    </ul> 
  </li>
  
   <li>manager
    <ul>
      <li>Dependencies.js : Install default modules (Express / EJS / Body-parser / Morgan / Mongoose) </li>
      <li>Generator.js : Generate default structure (MVC) and generate your files (controllers / models / routes ...) </li>
    </ul> 
  </li>
</ul>
