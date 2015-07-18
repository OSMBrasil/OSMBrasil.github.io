---
layout: page
title: Notícias
permalink: /noticias/
---

## Brasil [![Ícone do RSS para o Brasil][rssicon]][feed.xml]

Comunicações específicas da comunidade brasileira.

<ul>
    {% for post in site.categories.brasil limit:16 %}
      <li>
        {{ post.date | date_to_string }} ‒ <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title | xml_escape }}</a>
        <small>
            {% for tag in post.tags %}
            <span>{{ tag | xml_escape }}</span>
            {% endfor %}
        </small>
      </li>
    {% endfor %}
</ul>

## WeeklyOSM [![Ícone do RSS para o WeeklyOSM][rssicon]][weeklyosm.xml]

Traduções do semanário [weeklyosm.eu](http://weeklyosm.eu), que é gerado do [Wochennotiz](http://blog.openstreetmap.de/) alemão.

{% include weeklyosm.md %}

## OSMF

Traduções de comunicados oficiais da Fundação OpenStreetMap.

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


[rssicon]: {{site.baseurl}}/images/noticias/Rss_font_awesome.svg
[weeklyosm.xml]: {{site.baseurl}}/weeklyosm.xml
[feed.xml]: {{site.baseurl}}/feed.xml
