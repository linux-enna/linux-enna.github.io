# linux-enna.github.io

Sito di Linux Enna: Linux e software libero a Enna, con le pagine del Linux Day. Online su https://linux-enna.github.io.

Il sito è fatto con [Hugo](https://gohugo.io/), senza temi esterni. A ogni push su `main`, GitHub Actions lo compila e lo pubblica in circa un minuto (`.github/workflows/hugo.yml`). In **Settings > Pages** la sorgente deve restare **GitHub Actions**.

Questa guida vale per le persone e per i coding agent. Le [regole](#regole-per-chi-modifica-il-sito) in fondo vanno rispettate da tutti.

## Come aggiornare il sito

1. Installa Hugo extended, versione 0.165 o successiva (`brew install hugo`, `sudo apt install hugo` o dal sito di Hugo).
2. Avvia l'anteprima: `hugo server -D` e apri http://localhost:1313. Ogni modifica si vede subito. `-D` mostra anche le bozze.
3. Modifica i file in `content/` (vedi la tabella sotto). Di solito non serve toccare l'HTML.
4. Controlla che la build sia pulita: `hugo --gc --minify --panicOnWarning`.
5. Fai commit e push su `main`. Dopo un minuto il sito è aggiornato. Se qualcosa va storto, guarda la scheda **Actions** su GitHub.

### Dove si trova cosa

| Cosa | File |
|---|---|
| Testo della home, "Chi siamo" | `content/_index.md` |
| Annunci | `content/annunci/`, uno per file |
| Linux Day 2026: date, programma, testi | `content/eventi/linux-day-2026.md` |
| Pagina contatti | `content/contatti.md` |
| Indirizzi dei moduli | `hugo.toml`, `[params.moduli]` |
| Menu, email di contatto, link | `hugo.toml` |
| Colori e stile | `assets/css/style.css` |
| Struttura delle pagine | `layouts/` |
| Logo, icone, font | `static/img/`, `static/fonts/` |

### Aggiungere un annuncio

```sh
hugo new annunci/2026-10-20-titolo-breve.md
```

Apri il file, scrivi titolo e testo (due o tre frasi). Con `link: "/2026/"` il titolo porta a quella pagina invece che alla pagina dell'annuncio. In home compaiono gli ultimi cinque.

### Cambiare il programma

Nel file dell'evento, il campo `programma` è diviso in parti (mattina, pomeriggio), ognuna con un `sottotitolo` facoltativo. Ogni voce ha:

| Campo | Significato |
|---|---|
| `titolo` | obbligatorio |
| `tipo` | `talk` (default), `demo`, `lab`, `tavola`, `servizio`: cambia colore ed etichetta |
| `relatore` | nome di chi parla |
| `nota` | una riga in più |
| `da_confermare: true` | aggiunge l'etichetta "da confermare" |
| `immagine`, `immagine_alt` | piccola illustrazione tra descrizione e link della voce, con sfondo trasparente (file in `static/2026/`) e testo alternativo |
| `link` | un link sotto la voce: `{testo: "...", url: "..."}` oppure `{testo: "...", modulo: "talk"}` |

Le voci che si svolgono in contemporanea vanno dentro `parallelo`. Gli orari per ora non sono mostrati: il programma è "di massima".

### Riquadro "da terminale"

Nei testi in Markdown puoi usare una checklist con un tocco da terminale: una riga di comando e gli stati `[ok]`, `[opz]`, `[info]` in monospazio, il resto in testo normale.

```
{{</* terminale comando="./prepara.sh" */>}}
ok   | **Testo** in Markdown
opz  | voce facoltativa
info | suggerimento
{{</* /terminale */>}}
```

### Link secondario

Per un link alternativo meno in vista, ad esempio Google Maps dopo OpenStreetMap:

```
{{</* alt prima="o su" url="https://..." */>}}Google Maps{{</* /alt */>}}
```

Nel front matter dell'evento c'è `mappa_google`, nella pagina contatti il campo `alt` di un canale.

### Pagina contatti

La pagina mostra prima il testo in `content/contatti.md` (oggi i moduli del Linux Day, da togliere a evento concluso), poi i contatti fissi sotto "Resta in contatto": Discord, sito, email, RSS. Solo contatti stabili: niente sedi o mappe finché il gruppo non ne ha una.

Ogni contatto fisso è una voce di `canali`, con un `link` principale e un `alt` secondario facoltativo. Un link può puntare a un modulo (`modulo: "talk"`), a una mail (`url: "email"`, con `oggetto` facoltativo che precompila l'oggetto) o a un URL qualsiasi.

### Locandina

Le locandine stanno in `static/2026/`, quindi sono online in `https://linux-enna.github.io/2026/<nome-file>`. Oggi sono due: quella con i QR code (`locandina-linux-day-enna-2026-generale.pdf`, `.png` e `.jpg`) e quella di Enna (`locandina-linux-day-enna-2026.png` e `.jpg`), ognuna con un'anteprima da 640 px. Nella pagina del Linux Day le mostra lo shortcode `{{</* locandina */>}}`, che legge la lista `locandine` del front matter (titolo, anteprima, `grande` per la vista a tutto schermo, alt, file). Per `grande` (la vista a tutto schermo) usa sempre il PNG originale, non un JPG ricompresso: i QR code devono restare nitidi. Il JPG serve solo come download leggero. Il campo `immagine_social` sceglie l'immagine mostrata quando la pagina viene condivisa. Per sostituire una locandina, sovrascrivi i file mantenendo gli stessi nomi, così i link già condivisi continuano a funzionare.

### Supporters

Nella pagina del Linux Day, la sezione "Promotori e supporto" usa lo shortcode `{{</* supporters */>}}` e il campo `supporters` del front matter. Ogni voce ha `nome`, `ruolo` (ad esempio "Ospita l'evento"), `url`, `logo` per il tema chiaro e `logo_scuro` facoltativo per il tema scuro. I loghi vanno in `static/img/supporters/`, preferibilmente in SVG, nelle versioni ufficiali fornite da chi sostiene l'evento.

Prima di aggiungere un logo serve il permesso di chi lo possiede. Per le linee guida del Linux Day i supporter non devono dare all'evento un carattere commerciale: solo logo, nome e link, senza slogan o promozioni.

### Nuova edizione del Linux Day

Copia `content/eventi/linux-day-2026.md` in `linux-day-2027.md`, cambia `url` in `/2027/`, sposta `in_evidenza: true` sulla nuova edizione e aggiorna il menu in `hugo.toml`.

## Moduli

I moduli (partecipazione, volontari, proposte di talk, aziende) non sono nel sito: stanno sul servizio **forms.mlaquatra.me**, che raccoglie le risposte, manda le email di conferma e ospita l'informativa privacy (`https://forms.mlaquatra.me/privacy/linux`). Il sito li collega e basta.

- Gli indirizzi sono in un solo punto, `hugo.toml`, sotto `[params.moduli]` (`partecipa`, `volontari`, `talk`, `aziende`). Se un modulo cambia indirizzo, si cambia solo lì.
- Nei testi in Markdown: `{{</* modulo "volontari" */>}}Candidati come volontario{{</* /modulo */>}}`.
- Nel front matter (programma, contatti): `link: {testo: "...", modulo: "talk"}`.
- Riquadri con pulsante: lo shortcode `{{</* moduli */>}}` mostra i moduli elencati nel campo `moduli` del front matter della pagina (modulo, titolo, testo, pulsante, `principale: true` per il pulsante arancio). Con `{{</* moduli da="/eventi/linux-day-2026" */>}}` mostra quelli di un'altra pagina: così li usano sia la sezione "Partecipa" del Linux Day sia i Contatti, da un'unica lista.
- Il pulsante "Modulo di partecipazione" (pagina del Linux Day e riquadro in home) usa `moduli.partecipa` e sparisce se lo togli.
- Nomi da usare per i pulsanti, sempre uguali in tutto il sito: "Modulo di partecipazione", "Modulo volontari", "Modulo proposte di talk", "Modulo aziende".
- Le definizioni JSON dei moduli non stanno in questo repository. Modifiche a domande, date di chiusura o email di conferma si fanno sul servizio.

## Regole per chi modifica il sito

### Non negoziabili

Vengono dalle [linee guida del Linux Day](https://www.linuxday.it/2026/lineeguida/) e dalle scelte del gruppo.

- **Niente tracciamento e niente servizi proprietari incorporati.** Niente analytics, pixel, Google Fonts, CDN, embed di YouTube, Google Maps o Google Forms, widget social. Font e immagini sono nel repository. Per le mappe: link principale a OpenStreetMap, Google Maps solo come link secondario (classe `alt`, più piccolo e grigio). Mai mappe incorporate.
- **Niente cookie.** L'unico dato salvato nel browser è la scelta del tema (`localStorage`, chiave `theme`).
- **Ingresso libero e gratuito.** Non scrivere mai che l'iscrizione è obbligatoria. Il modulo è facoltativo e deve dirlo.
- **Nome dell'evento:** sempre "Linux Day", ad esempio "Linux Day Enna 2026". Nessuna variante.
- **Niente pubblicità di aziende o prodotti.**
- **Niente dati personali nel repository, che è pubblico.** Risposte ai moduli, liste di contatti e link privati (Drive, moduli interni, inviti a canali riservati agli organizzatori) non vanno committati. L'unico invito Discord pubblico è quello della pagina Contatti. `NOTE-ORGANIZZAZIONE.md` è solo locale e in `.gitignore`: si può leggere per il contesto, non copiare nel sito.
- **Niente informazioni non confermate presentate come certe.** Usa `da_confermare: true`. Non inventare orari, relatori, aule o numeri.
- **Il sito funziona senza JavaScript.** JS solo come miglioramento (oggi `static/js/theme.js` per il tema e `static/js/lightbox.js` per aprire le locandine a tutto schermo). Niente framework, bundler o dipendenze npm.

### Testi

- Italiano semplice e diretto, frasi brevi. Né accademico né aziendale.
- Virgolette dritte (`"` e `'`). Nessun trattino lungo o medio: usa due punti, virgole o frasi separate. La punteggiatura va fuori dalle virgolette di chiusura.
- Titoli come etichette semplici dell'argomento, non slogan. Niente emoji.
- Il tocco "nerd" è ammesso con misura: etichette monospazio come `[talk]`, il riquadro "da terminale", qualche comando finto. Il sito non deve sembrare un terminale.

### Grafica

- **Palette del logo**, definita in cima a `assets/css/style.css`: carbone `#232526`, verde `#44592e`, arancio `#f2a03d`, pesca `#f2cb9b`, grigio chiaro `#f2f2f2`. Ogni colore del sito è uno di questi o una loro sfumatura. Non introdurre colori nuovi.
- **Nei componenti usa i ruoli, non i codici esadecimali:** `--page` (sfondo), `--surface` (riquadri), `--ink` (testo), `--muted` (testo secondario), `--line` (bordi e separatori), `--link`, `--accent` (arancio), `--soft` (pesca).
- **Come si usano:**
  - tema chiaro: fondo quasi bianco, riquadri grigio chiaro, testo carbone, link verdi, pulsanti arancio;
  - tema scuro: fondo carbone, riquadri carbone più chiaro, testo grigio chiaro, link pesca, pulsanti arancio;
  - uguali nei due temi: verde pieno con testo chiaro (riquadro dell'evento in home, laboratorio, "pomeriggio") e pesca pieno con testo carbone (tavola rotonda, etichetta "da confermare").
- **Colori pieni, niente gradienti.** La linea del programma è arancio al mattino e verde al pomeriggio, come il sole e le colline del logo.
- **Niente bordi su un solo lato** (left border, top border usati come accento) se non richiesti esplicitamente. Un riquadro ha un bordo uniforme, sottile e discreto (`1px solid var(--line)`) e angoli arrotondati. Le linee che separano le voci di un elenco sono ammesse.
- Niente glassmorphism, ombre pesanti, animazioni o icone decorative.
- Fira Sans per il testo, Fira Mono per date, etichette ed elementi tecnici.
- Ogni ruolo va definito per il tema chiaro e per quello scuro. I valori scuri sono ripetuti in due blocchi (`@media (prefers-color-scheme: dark)` e `:root[data-theme="dark"]`): aggiornali insieme. Se cambi lo sfondo, aggiorna anche `theme-color` in `layouts/_default/baseof.html` (colore della barra del browser sul telefono).
- Mobile: target di almeno 44 px, niente scroll orizzontale a 320 px.
- Il logo scuro (`static/img/logo-horizontal-dark.png`) è un file a parte: non invertire il logo con filtri CSS.

### Prima del commit

- `hugo --gc --minify --panicOnWarning` senza errori né avvisi.
- Pagine toccate controllate in tema chiaro e scuro, a 1280 e a 390 px. **Coding agent:** il controllo visivo lo fa chi ha chiesto la modifica, a meno che non lo chieda a te.
- Nessun trattino lungo o virgoletta tipografica (U+2013, U+2014, U+2018, U+2019, U+201C, U+201D) nei file modificati.
- `public/`, `resources/` e `NOTE-ORGANIZZAZIONE.md` non vanno committati (sono in `.gitignore`).
- Messaggi di commit brevi, in italiano.
- **Coding agent:** niente push senza il via libera esplicito di chi ha chiesto la modifica, perché il push pubblica subito. Non aggiungere moduli o servizi di raccolta dati diversi da forms.mlaquatra.me senza chiedere.

## Tema chiaro e scuro

Di default il sito segue il sistema. Il pulsante nell'header cambia tema e ricorda la scelta; se la scelta torna uguale al sistema, viene dimenticata. Senza JavaScript il sito segue sempre il sistema.

## Licenze

- Codice: MIT, vedi `LICENSE`
- Contenuti: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.it)
- Font Fira Sans e Fira Mono: SIL Open Font License 1.1, vedi `static/fonts/OFL.txt`
