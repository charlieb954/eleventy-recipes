---
title: 'recipe book'
description: 'A simple interface for storing all types of personal recipes. Choose from a recipe below:'
layout: 'layouts/home.html'
permalink: '/index.html'
---


{% for recipe in collections.recipes -%}
- [{{ recipe.data.title | capitalize }}]({{ recipe.data.title | slug }}.html)
{% endfor -%}
