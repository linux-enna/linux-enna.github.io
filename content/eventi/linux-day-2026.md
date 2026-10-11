---
title: "Linux Day Enna 2026"
url: "/2026/"
date: 2026-10-09  # data di pubblicazione della pagina, non dell'evento
in_evidenza: true
eyebrow: "Giornata nazionale del software libero"
lead: "Una giornata per scoprire Linux e il software libero: talk al mattino, installation party e confronto con le aziende nel pomeriggio. Aperta a studenti, docenti, professionisti e curiosi."
summary: "Talk, installation party e confronto con le aziende del territorio. Università Kore di Enna, C.da Santa Panasia. Ingresso libero e gratuito."
quando: "Sabato 24 ottobre 2026"
dove: "Università Kore di Enna, C.da Santa Panasia"
mappa: "https://www.openstreetmap.org/node/12698650099#map=19/37.540615/14.284000"
# Link secondario, mostrato in piccolo dopo OpenStreetMap
mappa_google: "https://maps.app.goo.gl/daCdNRGDZn4bxi8ZA"
ingresso: "Libero e gratuito"
# Riquadri con pulsante della sezione "Partecipa" (shortcode {{< moduli >}}).
# modulo = chiave in hugo.toml (params.moduli); principale: true = pulsante arancio.
moduli:
  - modulo: "partecipa"
    titolo: "Vieni al Linux Day"
    testo: "L'ingresso è libero. Dicci che ci sei: ci aiuta a preparare aule e postazioni."
    pulsante: "Modulo di partecipazione"
    principale: true
  - modulo: "volontari"
    titolo: "Dai una mano"
    testo: "Cerchiamo volontari per accoglienza e installation party. Non serve essere esperti."
    pulsante: "Modulo volontari"
  - modulo: "talk"
    titolo: "Proponi un talk o una demo"
    testo: "C'è ancora uno spazio nel programma. Raccontaci la tua idea."
    pulsante: "Modulo proposte di talk"
  - modulo: "aziende"
    titolo: "Aziende e professionisti"
    testo: "Raccontate come usate l'open source alla tavola rotonda del pomeriggio."
    pulsante: "Modulo aziende"
nota_programma: "Programma di massima: titoli, ordine e orari saranno confermati nei prossimi giorni."

# Ogni voce: titolo, tipo (talk | lab | tavola | servizio, default talk),
# relatore, nota, da_confermare: true, link (tutti facoltativi tranne titolo).
# link: {testo, url} oppure {testo, modulo: "talk"} per un modulo definito in hugo.toml.
# "parallelo" raggruppa le voci che si svolgono in contemporanea.
programma:
  - parte: "Mattina"
    sottotitolo: "talk"
    voci:
      - titolo: "Accoglienza e apertura della giornata"
        tipo: servizio
      - titolo: "Container e self-hosting"
        relatore: "Christophe Sollami"
      - titolo: "LLM, open weights e open source"
        relatore: "Moreno La Quatra"
      - titolo: "Terzo talk"
        da_confermare: true
        link:
          testo: "Modulo proposte di talk"
          modulo: "talk"
  - parte: "Pomeriggio"
    sottotitolo: "pratica e confronto"
    voci:
      - parallelo:
          - titolo: "Talk di robotica"
            relatore: "Giuseppe Sutera"
          - titolo: "Linux installation party"
            tipo: lab
            nota: "Per tutto il pomeriggio. Porta il tuo computer e installiamo Linux insieme."
            link:
              testo: "Come funziona"
              url: "#installation-party"
      - titolo: "L'open source nelle aziende del territorio"
        tipo: tavola
        da_confermare: true
        link:
          testo: "Modulo aziende"
          modulo: "aziende"
      - titolo: "Chiusura"
        tipo: servizio
---

## Installation party {#installation-party}

Porta il tuo computer e installiamo Linux insieme. I volontari ti aiutano a scegliere una distribuzione adatta, a installarla e a muovere i primi passi. Non serve essere esperti: è proprio per chi vuole iniziare.

Prima di venire, controlla la lista:

{{< terminale comando="./prepara-installation-party.sh" titolo="Cosa preparare per l'installation party" >}}
ok   | **Backup dei tuoi dati.** È il passaggio più importante.
ok   | Caricabatterie del computer.
opz  | Spazio libero su disco, se vuoi tenere anche il sistema attuale.
info | Indeciso? Puoi provare Linux da chiavetta, senza installare nulla.
{{< /terminale >}}

## Partecipa {#partecipa}

L'ingresso è libero per tutta la giornata e i moduli sono facoltativi: ci aiutano solo a organizzarci meglio.

{{< moduli >}}

Per tutto il resto, la pagina [Contatti](/contatti/).

## Come arrivare {#dove}

Università Kore di Enna, Contrada Santa Panasia, Enna. Le indicazioni per le aule saranno disponibili all'ingresso.

[Apri la mappa su OpenStreetMap](https://www.openstreetmap.org/node/12698650099#map=19/37.540615/14.284000) {{< alt prima="o su" url="https://maps.app.goo.gl/daCdNRGDZn4bxi8ZA" >}}Google Maps{{< /alt >}}

## Il Linux Day {#linuxday}

Il Linux Day è la giornata nazionale dedicata a Linux e al software libero, promossa da Italian Linux Society dal 2001. Ogni anno, lo stesso sabato di ottobre, si tengono eventi locali in tutta Italia. Trovi tutti gli eventi su [linuxday.it](https://www.linuxday.it/).
