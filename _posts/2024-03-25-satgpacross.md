---
comments: True
layout: base
title: SAT to GPA Converter
description: Convert your SAT score into a GPA value!
courses: {'compsci': {'week': 27}}
type: hacks
permalink: /satgpacross
---

{% include navbar.html %}

<style>
    /* Your existing CSS styles */

    /* New styles for SAT to GPA form */
    #satForm {
        margin-top: 20px;
    }

    #satImage {
        display: block;
        margin: 0 auto;
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
    }
</style>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GPA Estimator</title>
    <style>
        /* Your CSS styles here */
    </style>
</head>
<body>
    <h1>GPA Estimator</h1>
    <form id="satForm">
    <label for="satscore">Enter SAT Score (out of 1600):</label>
    <input type="number" id="satscore" name="satscore">
    <!--<button type="submit" onclick="estimateGPA()">Estimate GPA</button>-->
    <button type="submit" onclick="estimateGPA()">Estimate GPA</button>
    </form>
    <p id="result"></p>
    <script>
        function estimateGPA() {
            document.getElementById('satForm').addEventListener('submit', function(event) {
                event.preventDefault();
            var satscore = parseFloat(document.getElementById('satscore').value);
                fetch("http://127.0.0.1:8028/api/satgpacross/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },                
                body: JSON.stringify({
                    'satscore': satscore
                })                                                    
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed Submit.  Check response');
                }                
                return response.json();                
            })
            .then(data => {                
                console.log('GPAData submitted successfully:', data);                
                alert('Estimated GPA received from backend:\n' + JSON.stringify(data));
                console.log('received from backend GPA = '+JSON.stringify(data));
            })                  
            .catch(error => {
                console.error('Error:', error.message);
                // Handle errors here, e.g., display an error message to the user
            });
        });
        }
    </script>
</body>
</html>