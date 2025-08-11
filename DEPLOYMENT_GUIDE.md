# Guida al Deploy su Vercel

## 🚀 Deploy Gratuito su Vercel

Vercel offre hosting gratuito per progetti Next.js con queste caratteristiche:
- ✅ **100 GB di bandwidth** al mese
- ✅ **Deploy automatici** da GitHub
- ✅ **HTTPS gratuito** con certificato SSL
- ✅ **Dominio personalizzato** gratuito
- ✅ **Edge Functions** e ottimizzazioni automatiche

## 📋 Prerequisiti

1. **Account GitHub** - Per il codice sorgente
2. **Account Vercel** - Gratuito su [vercel.com](https://vercel.com)
3. **Repository GitHub** - Il tuo progetto deve essere su GitHub

## 🔧 Preparazione del Progetto

### 1. Verifica la Configurazione Next.js

Il file `next.config.js` è già configurato per l'export statico:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### 2. Controlla le Variabili d'Ambiente

Assicurati che il file `.env.example` sia aggiornato:

```bash
# Copia .env.example in .env.local per sviluppo locale
cp .env.example .env.local
```

### 3. Test Locale

Prima del deploy, testa che tutto funzioni:

```bash
npm run build
npm run start
```

## 🚀 Deploy su Vercel

### Metodo 1: Deploy da GitHub (Consigliato)

1. **Carica il progetto su GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Vai su Vercel:**
   - Visita [vercel.com](https://vercel.com)
   - Clicca "Sign up" e accedi con GitHub

3. **Importa il progetto:**
   - Clicca "New Project"
   - Seleziona il repository del progetto
   - Clicca "Import"

4. **Configura il progetto:**
   - **Project Name**: `psicologa-chiara-moltisanti`
   - **Framework Preset**: Next.js (rilevato automaticamente)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `out` (per static export)

5. **Aggiungi le variabili d'ambiente:**
   - Vai in "Environment Variables"
   - Aggiungi tutte le variabili `NEXT_PUBLIC_*`:
     ```
     NEXT_PUBLIC_WHATSAPP_NUMBER=393123456789
     NEXT_PUBLIC_EMAIL=psicologamoltisantichiara@gmail.com
     NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/psicologamoltisantichiara/?hl=en
     NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/chiara.moltisanti.96
     NEXT_PUBLIC_STUDIO_ADDRESS=Via degli Aceri, 29, 97100 Ragusa, RG
     NEXT_PUBLIC_GOOGLE_MAPS_URL=https://www.google.com/maps/dir//Via+degli+Aceri,+29,+97100+Ragusa,+RG/@36.9248549,14.7095821,17z
     NEXT_PUBLIC_GOOGLE_MAPS_EMBED=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d14.709582115315!3d36.92485497993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131199a953d98ba1%3A0x65c052f8a3177955!2sVia%20degli%20Aceri%2C%2029%2C%2097100%20Ragusa%20RG%2C%20Italy!5e0!3m2!1sen!2sit
     ```

6. **Deploy:**
   - Clicca "Deploy"
   - Attendi 2-3 minuti per il build

### Metodo 2: Deploy da CLI

1. **Installa Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Segui le istruzioni interattive**

## 🌐 Dominio Personalizzato

### Dominio Gratuito Vercel
Il tuo sito sarà disponibile su:
`https://psicologa-chiara-moltisanti.vercel.app`

### Dominio Personalizzato (Opzionale)

1. **Acquista un dominio** (es. `psicologa-ragusa.it`)

2. **Aggiungi il dominio su Vercel:**
   - Vai nel progetto su Vercel
   - Settings > Domains
   - Aggiungi il tuo dominio

3. **Configura i DNS:**
   - Aggiungi un record CNAME che punta a `cname.vercel-dns.com`
   - Oppure record A che punta a `76.76.19.61`

## 🔄 Deploy Automatici

Una volta configurato, ogni push su GitHub attiverà automaticamente:
- ✅ **Build del progetto**
- ✅ **Deploy in produzione**
- ✅ **Aggiornamento del sito**
- ✅ **Notifiche via email**

## 📊 Monitoraggio

Vercel fornisce:
- **Analytics** - Visite e performance
- **Logs** - Debug e errori
- **Speed Insights** - Metriche di velocità
- **Web Vitals** - Core Web Vitals di Google

## 🛠️ Troubleshooting

### Build Fallisce
```bash
# Controlla errori localmente
npm run build

# Verifica le dipendenze
npm install
```

### Variabili d'Ambiente Non Funzionano
- Assicurati che abbiano il prefisso `NEXT_PUBLIC_`
- Riavvia il deploy dopo aver aggiunto variabili

### Immagini Non Si Caricano
- Verifica che siano in `public/assets/`
- Controlla i path relativi (iniziano con `/`)

### 404 su Pagine
- Verifica che `trailingSlash: true` sia in `next.config.js`
- Controlla la struttura delle cartelle in `app/`

## 💰 Costi

**Piano Gratuito Vercel:**
- ✅ Progetti illimitati
- ✅ 100 GB bandwidth/mese
- ✅ 1000 build minutes/mese
- ✅ Dominio .vercel.app gratuito
- ✅ HTTPS automatico

**Quando serve l'upgrade:**
- Più di 100 GB di traffico/mese
- Team collaboration
- Funzioni serverless avanzate

## 🎯 Risultato Finale

Dopo il deploy avrai:
- 🌐 **Sito online** su HTTPS
- 🚀 **Performance ottimali** con CDN globale
- 📱 **Mobile-friendly** con PWA features
- 🔍 **SEO ottimizzato** con meta tags
- 📊 **Analytics integrati**

Il sito sarà accessibile 24/7 con uptime del 99.9%!

## 📞 Supporto

- **Documentazione**: [vercel.com/docs](https://vercel.com/docs)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Support**: help@vercel.com (per piani a pagamento)