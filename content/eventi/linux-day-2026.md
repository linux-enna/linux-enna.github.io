---
title: "Linux Day Enna 2026"
url: "/2026/"
date: 2026-10-09  # data di pubblicazione della pagina, non dell'evento
in_evidenza: true
eyebrow: "Giornata nazionale del software libero"
lead: "Una giornata per scoprire Linux e il software libero: talk al mattino e nel pomeriggio, demo di robotica e installation party. Aperta a studenti, docenti, professionisti e curiosi."
summary: "Talk, demo di robotica e installation party. Università Kore di Enna, C.da Santa Panasia. Ingresso libero e gratuito."
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


# Chi sostiene l'evento (shortcode {{< supporters >}}). Loghi in static/img/supporters/.
# Ogni voce: nome, ruolo, url, logo (tema chiaro), logo_scuro (tema scuro, facoltativo).
supporters:
  - nome: "Università degli Studi di Enna \"Kore\""
    ruolo: "Ospita l'evento"
    url: "https://uke.it/"
    logo: "/img/supporters/unikore.png"
    logo_scuro: "/img/supporters/unikore-dark.png"
  - nome: "Italian Linux Society"
    ruolo: "Promuove il Linux Day"
    url: "https://www.ils.org/"
    logo: "/img/supporters/ils.svg"
  - nome: "Linux Day 2026"
    ruolo: "Evento nazionale"
    url: "https://www.linuxday.it/"
    logo: "/img/supporters/linuxday.png"
    logo_scuro: "/img/supporters/linuxday-dark.png"
# Locandine (shortcode {{< locandina >}}); i file stanno in static/2026/, quindi sono online in /2026/.
# "grande" è l'immagine mostrata a tutto schermo cliccando l'anteprima.
locandine:
  - titolo: "Linux Day Enna 2026 - QR Code"
    anteprima: "/2026/locandina-generale-anteprima.jpg"
    grande: "/2026/locandina-linux-day-enna-2026-generale.png"
    alt: "Locandina del Linux Day Enna 2026: sabato 24 ottobre dalle 10:00, Università Kore di Enna, ingresso libero e gratuito. Cloud, AI e Robotica, Linux Installation Party, QR code per partecipazione, volontari e programma"
    file:
      - formato: "PDF"
        url: "/2026/locandina-linux-day-enna-2026-generale.pdf"
        nota: "per la stampa"
      - formato: "PNG"
        url: "/2026/locandina-linux-day-enna-2026-generale.png"
      - formato: "JPG"
        url: "/2026/locandina-linux-day-enna-2026-generale.jpg"
  - titolo: "Linux Day Enna 2026"
    anteprima: "/2026/locandina-anteprima.jpg"
    grande: "/2026/locandina-linux-day-enna-2026.png"
    alt: "Locandina del Linux Day Enna 2026: 24 ottobre 2026 dalle 10:00, talk, demo e installation party, C.da Santa Panasia, Università Kore di Enna"
    file:
      - formato: "PNG"
        url: "/2026/locandina-linux-day-enna-2026.png"
      - formato: "JPG"
        url: "/2026/locandina-linux-day-enna-2026.jpg"
# Immagine di anteprima quando la pagina viene condivisa
immagine_social: "/2026/locandina-linux-day-enna-2026-generale.jpg"
nota_programma: "Gli orari sono indicativi e potranno subire variazioni."

# Ogni voce: titolo, tipo (talk | demo | lab | tavola | servizio, default talk),
# orario, relatore, nota, da_confermare: true, link, immagine e immagine_alt (facoltativi).
# Il titolo si puo' omettere in attesa di riceverlo dal relatore.
# link: {testo, url} oppure {testo, modulo: "talk"} per un modulo definito in hugo.toml.
# "parallelo" raggruppa le voci che si svolgono in contemporanea.
programma:
  - parte: "Mattina"
    sottotitolo: "talk"
    voci:
      - titolo: "Accoglienza, registrazione dei partecipanti e apertura della giornata"
        tipo: servizio
        orario: "09:30"
      - titolo: "Fare a meno del cloud"
        orario: "10:00-10:45"
        relatore: "Christophe Sollami"
        nota: "Foto, documenti e servizi online: ogni giorno affidiamo sempre più dati a piattaforme esterne. Ma è davvero necessario? Il self-hosting offre un'alternativa: ospitare i propri servizi su un server personale, mantenendo il controllo sui dati. Attraverso esempi pratici, il talk mostra come iniziare a farlo utilizzando i container, senza dover dipendere necessariamente dai grandi provider cloud."
      - titolo: "Liberi di usare l'AI"
        orario: "10:45-11:30"
        relatore: "Moreno La Quatra"
        nota: "L'intelligenza artificiale è davvero aperta a tutti? Sempre più modelli vengono presentati come open, ma non tutti garantiscono le stesse libertà. Il talk chiarisce la differenza tra open source e open weights, spiegando cosa possiamo realmente fare con questi modelli e quali limitazioni possono avere. Vedremo inoltre come eseguire un modello di intelligenza artificiale direttamente sul proprio computer, senza affidarsi a servizi esterni."
      - titolo: "Coffee break"
        tipo: servizio
        orario: "11:30-11:45"
      - titolo: "Open Source e Ricerca scientifica"
        orario: "11:45-12:30"
        relatore: "Carmelo Scuro"
        nota: "Le tecnologie open source rappresentano oggi una risorsa strategica per la ricerca scientifica, poiché favoriscono l'accessibilità degli strumenti e la riproducibilità dei risultati. In questo contesto, la modellistica matematica consente di descrivere fenomeni complessi e di costruire scenari previsionali a supporto delle decisioni. Un'applicazione riguarda lo studio degli incendi nel territorio ennese, affrontato integrando modelli matematici, dati ambientali e informazioni geospaziali. L'impiego di strumenti open source permette di simulare la propagazione del fuoco e di individuare le aree maggiormente esposte. Tale approccio mostra come l'integrazione tra matematica e tecnologie open source possa contribuire alla prevenzione e alla gestione del rischio ambientale."
      - titolo: "Pausa pranzo"
        tipo: servizio
        orario: "12:30-14:30"
  - parte: "Pomeriggio"
    sottotitolo: "talk, demo e pratica"
    voci:
      - tipo: talk
        orario: "14:30-15:00"
        relatore: "Aurelio Francesco Carmeni"
      - parallelo:
          - titolo: "Robotica e Open Source"
            tipo: demo
            orario: "Dalle 15:00"
            relatore: "Giuseppe Sutera"
            nota: "Come si passa dal codice al movimento di un robot? E quale ruolo hanno Linux e il software libero? Una dimostrazione dal vivo di come le tecnologie open source vengono utilizzate nella robotica: dalla lettura dei sensori al controllo dei movimenti, fino al software che coordina il funzionamento del robot. Un'occasione per vedere questi strumenti in azione e comprenderne le applicazioni pratiche."
          - titolo: "Linux installation party"
            tipo: lab
            orario: "Dalle 15:00"
            nota: "Durante il pomeriggio, porta il tuo computer e installiamo Linux insieme."
            immagine: "/2026/installation-party.png"
            immagine_alt: "Tre persone intorno a un portatile che installa Linux"
            link:
              testo: "Come funziona"
              url: "#installation-party"

      - titolo: "Chiusura, discussione e foto di gruppo"
        tipo: servizio
        orario: "16:30"
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

Università Kore di Enna, Contrada Santa Panasia, Enna, nell'edificio dietro il Kore Platform (Medicina). Le indicazioni per le aule saranno disponibili all'ingresso.

[Apri la mappa su OpenStreetMap](https://www.openstreetmap.org/node/12698650099#map=19/37.540615/14.284000) {{< alt prima="o su" url="https://maps.app.goo.gl/daCdNRGDZn4bxi8ZA" >}}Google Maps{{< /alt >}}

## Locandine {#locandina}

{{< locandina >}}

## Promotori e supporto {#supporters}

{{< supporters >}}

## Il Linux Day {#linuxday}

Il Linux Day è la giornata nazionale dedicata a Linux e al software libero, promossa da Italian Linux Society dal 2001. Ogni anno, lo stesso sabato di ottobre, si tengono eventi locali in tutta Italia. Trovi tutti gli eventi su [linuxday.it](https://www.linuxday.it/).
