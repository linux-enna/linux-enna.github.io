# linux-enna.github.io

Sito di Linux Enna: Linux e software libero a Enna, con le pagine del Linux Day. Pubblicato su https://linux-enna.github.io.

Il sito è fatto con [Hugo](https://gohugo.io/), senza temi esterni: i layout sono in `layouts/`. A ogni push su `main`, GitHub Actions lo compila e lo pubblica (`.github/workflows/hugo.yml`). In **Settings > Pages**, la sorgente deve essere **GitHub Actions**.

## Modifiche frequenti

| Cosa | Dove |
|---|---|
| Nuovo annuncio | `hugo new annunci/AAAA-MM-GG-titolo.md`, poi modifica il testo |
| Programma del Linux Day | `content/eventi/linux-day-2026.md`, campo `programma` |
| Testi delle sezioni dell'evento | stesso file, sotto le `---` |
| Chi siamo, contatti, testo della home | `content/_index.md` |
| Menu, email, link | `hugo.toml` |
| Colori e stile | `assets/css/style.css` |

Gli annunci compaiono in home dal più recente. Se un annuncio ha `link`, il titolo porta a quella pagina.

### Programma

Ogni voce ha `titolo` e, facoltativi, `relatore`, `nota`, `da_confermare: true` e `minore: true` (voci di servizio, in grigio). Le voci in contemporanea vanno sotto `parallelo`.

### Nuova edizione del Linux Day

Copia `content/eventi/linux-day-2026.md` in `linux-day-2027.md`, cambia `url` in `/2027/`, sposta `in_evidenza: true` sulla nuova edizione e aggiorna il menu in `hugo.toml`.

## Anteprima locale

```sh
hugo server
```

Poi apri http://localhost:1313. Le modifiche si vedono subito.

## Logo e immagini

In `static/img/`: logo orizzontale per tema chiaro e scuro, icone e immagine per l'anteprima social. Sono ricavati dai file originali del logo.

## Tema chiaro e scuro

Di default segue il sistema. Il pulsante nell'header lo cambia e ricorda la scelta; se la scelta torna uguale al sistema, viene dimenticata. Senza JavaScript il sito segue sempre il sistema.

## Licenze

- Codice: MIT, vedi `LICENSE`
- Contenuti: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.it)
- Font Fira Sans e Fira Mono: SIL Open Font License 1.1, vedi `static/fonts/OFL.txt`
