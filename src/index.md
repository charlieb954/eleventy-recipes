---
title: 'RECIPE BOOK'
layout: 'layouts/home.html'
---

Simple interface for storing recipes.

{% for recipe in collections.recipes -%}
- [{{ recipe.data.title }}]({{ recipe.data.title }}.html)
{% endfor -%}
