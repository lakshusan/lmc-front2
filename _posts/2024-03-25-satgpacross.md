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

<h1 id="h1">SAT to GPA Converter</h1>

<div class="container">
    <img id="satImage" src="./images/satgpacross.jpg" alt="SAT GPA Image">
    <form id="satForm" onsubmit="return convertSatToGpa()">
        <p><label>
            SAT Score:
            <input class="userInput" type="number" name="satScore" id="satScore" required>
        </label></p>
        <p>
            <button id="convertButton" type="submit">Convert</button>
        </p>
    </form>
</div>

<script>
    const satToGpaUrl = "http://127.0.0.1:8028/api/sat-to-gpa/";

    function convertSatToGpa() {
        const satScore = parseInt(document.getElementById('satScore').value);

        // Construct the request body
        const requestBody = {
            satScore: satScore
        };

        // Configure the fetch request
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        };

        // Send the fetch request to the backend
        fetch(satToGpaUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Update the UI with the calculated GPA
                const gpa = data.gpa;
                const h1 = document.getElementById('h1');
                h1.textContent = `GPA: ${gpa}`;
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });

        // Prevent form submission
        return false;
    }
</script>