---
title: 'recipe book'
description: 'A simple interface for storing all types of personal recipes. Choose from a recipe below:'
layout: 'layouts/home.html'
permalink: '/index.html'
---

## Mains

{% for recipe in collections.mains -%}
- [{{ recipe.data.title | capitalize }}]({{ recipe.data.title | slug }}.html)
{% endfor -%}

## Desserts

{% for recipe in collections.desserts -%}
- [{{ recipe.data.title | capitalize }}]({{ recipe.data.title | slug }}.html)
{% endfor -%}