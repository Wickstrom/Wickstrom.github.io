---
permalink: /news/
title: "News"
author_profile: true
---

### Recent news
======
{% include news-carousel.html %}

<details class="news-archive">
<summary>Older news</summary>

<ul class="news-archive__list">
  {% for item in site.data.news %}{% if item.archived %}
  <li>
    <span class="news-archive__date">{{ item.date }}</span>
    <span class="news-archive__text">{{ item.text }}</span>
    {% if item.link %} <a class="news-archive__link" href="{{ item.link.url }}">{{ item.link.text }}</a>{% endif %}
  </li>
  {% endif %}{% endfor %}
</ul>
</details>
