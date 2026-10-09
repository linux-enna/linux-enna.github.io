---
title: "{{ replace (replaceRE `^\d{4}-\d{2}-\d{2}-` "" .File.ContentBaseName) "-" " " | title }}"
date: {{ .Date }}
# link: "/2026/"   # facoltativo: dove porta il titolo dell'annuncio
---

Testo breve dell'annuncio.
