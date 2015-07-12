---
layout: page
title: Notícias
permalink: /noticias/
---

## Brasil

Comunicações específicas da comunidade brasileira.

- Primeiro post
- Secundo post

<ul>
    {% for post in site.categories.brasil limit:16 %}
      <li>
        {{ post.date | date_to_string }} ‒ <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title | xml_escape }}</a>
        <small>
            {% for tag in post.tags %}
            <span>{{ tag | xml_escape }}</span>
            {% endfor %}
        </small>
      </li>
    {% endfor %}
</ul>

## WeeklyOSM

Traduções do semanário [weeklyosm.eu](http://weeklyosm.eu), gerado do [Wochennotiz](http://blog.openstreetmap.de/) alemão.

- Primeiro post
- Secundo post

<ul>
    {% for post in site.categories.weeklyosm limit:16 %}
      <li>
        {{ post.date | date_to_string }} ‒ <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title | xml_escape }}</a>
        <small>
            {% for tag in post.tags %}
            <span>{{ tag | xml_escape }}</span>
            {% endfor %}
        </small>
      </li>
    {% endfor %}
</ul>

## OSMF

Traduções de comunidados oficiais da Fundação OpenStreetMap.

<ul>
    {% for post in site.categories.osmf limit:16 %}
      <li>
        {{ post.date | date_to_string }} ‒ <a href="{{ post.url | prepend: site.baseurl | prepend: site.url }}">{{ post.title | xml_escape }}</a>
        <small>
            {% for tag in post.tags %}
            <span>{{ tag | xml_escape }}</span>
            {% endfor %}
        </small>
      </li>
    {% endfor %}
</ul>
