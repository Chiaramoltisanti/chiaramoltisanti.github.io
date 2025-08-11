# Sito Web Dott.ssa Chiara Moltisanti - Next.js

Versione Next.js del sito web professionale della Dott.ssa Chiara Moltisanti, psicologa a Ragusa e online.

## Caratteristiche

- ✅ **Next.js 14** con App Router
- ✅ **TypeScript** per type safety
- ✅ **Bootstrap 5** per il design responsive
- ✅ **SEO ottimizzato** con metadata dinamici
- ✅ **Static Export** per hosting su GitHub Pages
- ✅ **Componenti modulari** per facile manutenzione
- ✅ **Accordion FAQ interattivo** con React state
- ✅ **Routing ottimizzato** per tutte le pagine dei servizi

## Struttura del Progetto

```
├── app/
│   ├── layout.tsx          # Layout principale con metadata SEO
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Stili globali
│   ├── tss/page.tsx        # Terapia a Seduta Singola
│   ├── sostegno/page.tsx   # Sostegno Psicologico
│   ├── online/page.tsx     # Sostegno Online
│   ├── studio/page.tsx     # Benessere
│   ├── mindfulness/page.tsx # Mindfulness
│   ├── rilassamento/page.tsx # Rilassamento
│   └── subject/page.tsx    # A chi mi rivolgo
├── components/
│   ├── Header.tsx          # Header con navigazione
│   ├── About.tsx           # Sezione "Chi sono"
│   ├── Mission.tsx         # Sezione "Cosa tratto"
│   ├── Services.tsx        # Sezione servizi
│   ├── Sessions.tsx        # Sezione "A chi mi rivolgo"
│   ├── FAQ.tsx             # FAQ interattive
│   ├── Footer.tsx          # Footer
│   └── ServiceLayout.tsx   # Layout per pagine servizi
├── public/assets/          # Assets statici (CSS, immagini, JS)
└── package.json
```

## Installazione e Avvio

1. **Installa le dipendenze:**
   ```bash
   npm install
   ```

2. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

3. **Apri il browser su:**
   ```
   http://localhost:3000
   ```

## Build e Deploy

### Build per produzione:
```bash
npm run build
```

### Deploy su GitHub Pages:
Il progetto è configurato per l'export statico. Dopo il build, la cartella `out/` conterrà tutti i file statici pronti per il deploy.

## Servizi Offerti

Il sito presenta i seguenti servizi della Dott.ssa Moltisanti:

- **Terapia a Seduta Singola (TSS)** - Massima efficacia in tempi brevi
- **Sostegno Psicologico** - Percorsi personalizzati di crescita
- **Sostegno Online** - Consulenze via videochiamata
- **Benessere** - Obiettivi personalizzati per il benessere
- **Mindfulness** - Consapevolezza nel momento presente
- **Rilassamento** - Tecniche per gestire lo stress

## Problematiche Trattate

- Ansia e Stress
- Autostima
- Elaborazione del Lutto
- Difficoltà Scolastiche
- Perinatalità
- Genitorialità

## Target

- **Adulti** - Percorsi individuali
- **Coppie** - Terapia di coppia
- **Età evolutiva** - Bambini e adolescenti

## Tecnologie Utilizzate

- **Next.js 14** - Framework React
- **TypeScript** - Linguaggio tipizzato
- **Bootstrap 5** - Framework CSS
- **React Hooks** - Gestione stato componenti
- **CSS Modules** - Stili componenti

## SEO e Performance

- Metadata ottimizzati per ogni pagina
- Open Graph tags per social media
- Sitemap automatica
- Immagini ottimizzate
- Lazy loading
- Static generation per performance

## Contatti

**Dott.ssa Chiara Moltisanti**
- P.IVA: 01756380885
- Instagram: [@psicologamoltisantichiara](https://www.instagram.com/psicologamoltisantichiara/)
- Facebook: [Chiara Moltisanti](https://www.facebook.com/chiara.moltisanti.96)
- Indirizzo: Via degli Aceri, 29, 97100 Ragusa, RG