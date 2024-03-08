---
comments: True
layout: base
title: Let m Cook
description: cooking
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /bakesuccess
---
<style>
        body, html {
            height: 100%;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        h1 {
            text-align: center;
        }
        @keyframes shake {
            0% { transform: translate(0, 0) rotate(0); }
            10% { transform: translate(-10px, 0) rotate(-5deg); }
            20% { transform: translate(10px, 0) rotate(5deg); }
            30% { transform: translate(-10px, 0) rotate(-5deg); }
            40% { transform: translate(10px, 0) rotate(5deg); }
            50% { transform: translate(-10px, 0) rotate(-5deg); }
            60% { transform: translate(10px, 0) rotate(5deg); }
            70% { transform: translate(-10px, 0) rotate(-5deg); }
            80% { transform: translate(10px, 0) rotate(5deg); }
            90% { transform: translate(-10px, 0) rotate(-5deg); }
            100% { transform: translate(0, 0) rotate(0); }
        }

        @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
        }

        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        .shaking-element {
            animation: shake 3s 1, fadeOut 3s forwards 3s;
        }

        .hidden {
            display: none;
        }

        .fadeIn {
            animation: fadeIn 3s forwards 6s;
        }
    </style>

<h1 id = "header"></h1>
<img src="{{site.baseurl}}/images/oven.png" class="shaking-element" alt="Shaking Oven">
<img id = "image" src = "" class="hidden fadeIn">
<script src="/lmc-frontend/LMC/JS/success.js"></script>

