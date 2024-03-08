---
layout: base
title: LMC Leaderboard 
description: An advanced example of database CRUD (Create, Read, Update, Delete).  This articles is focussed on Read.  Each operation works asynchronously between JavaScript and a Python/Flask backend Database.  This requires a set of Python RESTful API services for Get, Put, Delete, and Update.
permalink: /data/database
---

<!-- HTML table layout for page.  The table is filled by JavaScript below. 
-->

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Leaderboard</title>
<link rel="stylesheet" href="/lmc-frontend/LMC/JS/SCSS/leaderboard.css"> <!-- Link to the external CSS file -->
{% include navbar.html %}
</head>
<body>

<h1>Let 'Em Cook Leaderboard</h1>

<table>
  <thead>
  <tr>
    <th>Name</th>
    <th>ID</th>
    <th>Age</th>
    <th>Points</th>
  </tr>
  </thead>
  <tbody id="result">
    <!-- javascript generated data -->
  </tbody>
</table>
<div>
  <button class="edit-user" onclick='window.location.href = "{{site.baseurl}}/lmc-editUser"'>Edit User</button>
</div>

<div>
  <button class="delete-user" onclick='window.location.href = "{{site.baseurl}}/lmc-deleteUser"'>Delete User</button>
</div>


<script type="module">
  // uri variable and options object are obtained from config.js
  import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';

  // Set Users endpoint (list of users)
  const url = uri + '/api/users/';

  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");

  // fetch the API
  fetch(url, options)
    // response is a RESTful "promise" on any successful fetch
.then(response => {
    // check for response errors and display
    if (response.status !== 200) {
        if (response.status === 401) {
            // Unauthorized - Redirect to 401 error page
            window.location.href = "/lmc-frontend/lmc-login";
        } else if (response.status === 403) {
            // Forbidden - Redirect to 403 error page
            alert(response.status + " error. Redirecting you to the login")
            const errorMsg = 'Database response error: ' + response.status;
            console.log(errorMsg);
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = errorMsg;
            tr.appendChild(td);
            resultContainer.appendChild(tr);
            window.location.href = "/lmc-frontend/lmc-login";
            return;
        }
    }
    // valid response will contain JSON data
    response.json().then(data => {
        console.log(data);

        // Sort data by points (highest to lowest)
        data.sort((a, b) => b.points - a.points);

        for (const row of data) {
            // tr and td build out for each row
            const tr = document.createElement("tr");
            const name = document.createElement("td");
            const id = document.createElement("td");
            const age = document.createElement("td");
            const points = document.createElement("td");
            // data is specific to the API
            name.innerHTML = row.name; 
            id.innerHTML = row.uid; 
            age.innerHTML = row.age; 
            points.innerHTML = row.points;
            // this builds td's into tr
            tr.appendChild(name);
            tr.appendChild(id);
            tr.appendChild(age);
            tr.appendChild(points);

            // append the row to table
            resultContainer.appendChild(tr);
        }
    });
})

  // catch fetch errors (ie ACCESS to server blocked)
  .catch(err => {
    console.error(err);
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = err + ": " + url;
    tr.appendChild(td);
    resultContainer.appendChild(tr);
  });
</script>

