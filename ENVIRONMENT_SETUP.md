# Configurazione Variabili d'Ambiente

## Setup Iniziale

1. **Copia il file di esempio:**
   ```bash
   cp .env.example .env.local
   ```

2. **Modifica `.env.local` con i tuoi dati reali:**
   ```bash
   nano .env.local
   ```

## Variabili Disponibili

### Contatti
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - Numero WhatsApp (formato: 393123456789)
- `NEXT_PUBLIC_EMAIL` - Email di contatto

### Social Media
- `NEXT_PUBLIC_INSTAGRAM_URL` - Link profilo Instagram
- `NEXT_PUBLIC_FACEBOOK_URL` - Link profilo Facebook

### Studio
- `NEXT_PUBLIC_STUDIO_ADDRESS` - Indirizzo dello studio
- `NEXT_PUBLIC_GOOGLE_MAPS_URL` - Link Google Maps dello studio

## Componenti che Usano le Variabili

### About.tsx
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - Per il bottone WhatsApp CTA

### BookingCalendar.tsx
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - Per il bottone WhatsApp
- `NEXT_PUBLIC_EMAIL` - Per il bottone email

### Header.tsx
- `NEXT_PUBLIC_INSTAGRAM_URL` - Link Instagram nell'header
- `NEXT_PUBLIC_FACEBOOK_URL` - Link Facebook nell'header
- `NEXT_PUBLIC_GOOGLE_MAPS_URL` - Link Google Maps nell'header

## Sicurezza

- ✅ **File `.env.local` è in .gitignore** - Non verrà committato
- ✅ **Prefisso NEXT_PUBLIC_** - Variabili esposte al client
- ✅ **Valori di fallback** - Il sito funziona anche senza configurazione

## Deployment

### Vercel
1. Vai su Vercel Dashboard
2. Seleziona il progetto
3. Vai in Settings > Environment Variables
4. Aggiungi tutte le variabili NEXT_PUBLIC_*

### Netlify
1. Vai su Netlify Dashboard
2. Seleziona il sito
3. Vai in Site settings > Environment variables
4. Aggiungi tutte le variabili NEXT_PUBLIC_*

### Altri Provider
Consulta la documentazione del tuo provider per aggiungere le variabili d'ambiente.

## Esempio di Configurazione Completa

```bash
# .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=393123456789
NEXT_PUBLIC_EMAIL=psicologamoltisantichiara@gmail.com
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/psicologamoltisantichiara/?hl=en
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/chiara.moltisanti.96
NEXT_PUBLIC_STUDIO_ADDRESS=Via degli Aceri, 29, 97100 Ragusa, RG
NEXT_PUBLIC_GOOGLE_MAPS_URL=https://www.google.com/maps/dir//Via+degli+Aceri,+29,+97100+Ragusa,+RG/@36.9248549,14.7095821,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x131199a953d98ba1:0x65c052f8a3177955!2m2!1d14.7117708!2d36.9248506
```

## Test

Per testare che le variabili funzionino:

1. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

2. **Verifica i link:**
   - Clicca sui bottoni social nell'header
   - Prova il bottone WhatsApp nella sezione About
   - Testa i bottoni di contatto nella sezione Booking

3. **Controlla la console del browser** per eventuali errori

## Troubleshooting

### Le variabili non funzionano
- Verifica che il file `.env.local` sia nella root del progetto
- Controlla che le variabili abbiano il prefisso `NEXT_PUBLIC_`
- Riavvia il server di sviluppo dopo aver modificato le variabili

### Link WhatsApp non funziona
- Verifica che il numero sia nel formato corretto (senza + o spazi)
- Esempio corretto: `393123456789`
- Esempio sbagliato: `+39 312 345 6789`