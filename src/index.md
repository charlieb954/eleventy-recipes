---
title: 'recipe book'
description: 'a simple interface for storing personal recipes.'
layout: 'layouts/home.html'
permalink: '/index.html'
---


{% for recipe in collections.recipes -%}
- [{{ recipe.data.title | capitalize }}]({{ recipe.data.title | slug }}.html)
{% endfor -%}
