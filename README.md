<div align='center'>
<h1><strong>E-Commerce Backend Model</strong></h1>
</div>

### Badges: [![badge src!](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses) ![badge src!](https://img.shields.io/badge/Language-JavaScript-yellow)

![2021-07-21-15-43-01](https://user-images.githubusercontent.com/79816212/126559620-bed4ef97-bfcd-40e3-a112-25d05d504459.gif)

<div align='center'>
<strong>Table of Contents</strong>  
<hr>
    <p><a href='#desc'>About</a></p>
    <p><a href='#install'>Installation</a></p>
    <p><a href='#user'>User Guidelines</a></p>
    <p><a href='#test'>Seeding and Execution</a></p>
    <p><a href='#license'>Licensing</a></p>
    <p><a href='#contribute'>Contributors</a></p>
    <p><a href='#contact'>Contact</a></p>

<hr>
</div>

<div align='center'>
    <h3><a id='desc'>About</a></h3>
</div>

<div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-Commerce Backend Model is a command-line javascript application that enables users access and changes to an ecommerce database. The database ran by sequelize for MySQL follows four model classes: category, product, tag, and product tag.
            
</div>

<br>

<div>
    <pre><code>
    CATEGORY
        - id
        - category_name
    </pre></code>
    <pre><code>
    PRODUCT
        - id
        - product_name
        - price
        - stock
        - category_id
    </pre></code>
    <pre><code>
    TAG
        - id
        - tag_name
    </pre></code>
    <pre><code>
    PRODUCT_TAG
        - id
        - product_id
        - tag_id
    </pre></code>
</div>

<hr>

<div align='center'>
    <h3><a id='install'>Installation</a></h3>
</div>

<div>
<h4>Instructions: </h4>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Download from the repository. Node is required to initialize the index.js file. MySQL is required to create the database. App functionality and use were built depending on Insomnia.
    
<br>
    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⚠️ Users are required to provide their MySQL password and a user for the database following the .env.EXAMPLE file provided within this &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;repository.
</div>

<hr>

<div align='center'>
    <h3><a id='user'>User Guidelines</a></h3>
</div>

<div>
<h4>Guide: </h4> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From the command line install the package.json dependencies. In MySQL Workbench run schema.sql. The schema file is found in the db folder provided within this repository. 
    
<br>
    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Run server.js with node to start the application after the dependencies have been installed and the database has been seeded. The command line will display changes in the database depending on the response status from each URL call made in Insomnia.
</div>

<hr>

<div align='center'>
    <h3><a id='test'>Seeding and Execution</a></h3>
</div>

<div>
<h4> Seeding: MySQL Workbench and Command Line</h4>
<pre><code>Open and execute schema.sql script in MySQL</code></pre>
<pre><code>Run node seeds/index.js in the command line. Refer to the provided package.json file to find additonal scripts</code></pre>
</div>

<div>
<h4> Execution: Command Line</h4>
<pre><code>npm i</code></pre>
<pre><code>npm start</code></pre>
</div>

<hr>

<div align='center'>
    <h3><a id='license'>Licensing</a></h3>
</div>

<div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>MIT</strong> © <strong>maayazed</strong>
</div>

<hr>

<div align='center'>
    <h3><a id='contribute'>Contributors</a></h3>
</div>

<div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://github.com/maayazed/'><img src='https://img.shields.io/badge/User-maayazed-blue'></a>
</div>

<hr>

<div align='center'>
    <h3><a id='contact'>Contact</a></h3>
</div>

<div>
<h4>Github:<a href='https://github.com/maayazed/'>&nbsp;&nbsp;&nbsp;maayazed</a></h4>
<h4>Email:&nbsp;&nbsp;&nbsp;zerreod@outlook.com</h4>
</div>

<hr>

<div align="center">Made With ❤️</div>
