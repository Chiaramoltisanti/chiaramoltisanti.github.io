# 🚀 Quick Start Guide

## Sviluppo Locale

### Opzione 1: Con Static Export (Produzione-like)
```bash
# Sviluppo
npm run dev

# Build e test locale (come in produzione)
npm run build
npm run start
```

### Opzione 2: Con Next.js Server (Solo Development)
```bash
# Usa configurazione development
npm run dev:server

# Build e start con server Next.js
npm run build:static
npm run start:dev
```

## Deploy su Vercel

### Metodo Automatico
```bash
npm run deploy
```

### Metodo Manuale
1. Push su GitHub:
   ```bash
   git add .
   git commit -m "Deploy ready"
   git push
   ```

2. Vai su [vercel.com](https://vercel.com) e importa il repository

## Configurazione Variabili d'Ambiente

1. **Locale**: Copia `.env.example` in `.env.local`
2. **Vercel**: Aggiungi le variabili nel dashboard Vercel

## Comandi Utili

- `npm run dev` - Sviluppo locale
- `npm run build` - Build per produzione
- `npm run start` - Serve file statici (post-build)
- `npm run preview` - Build + serve in un comando
- `npm run deploy` - Deploy automatico su Vercel

## Troubleshooting

### "next start" non funziona
✅ **Soluzione**: Usa `npm run start` (che usa `serve` per i file statici)

### Build fallisce
```bash
# Pulisci e reinstalla
rm -rf .next out node_modules
npm install
npm run build
```

### Variabili d'ambiente non funzionano
- Assicurati che inizino con `NEXT_PUBLIC_`
- Riavvia il server dopo le modifiche