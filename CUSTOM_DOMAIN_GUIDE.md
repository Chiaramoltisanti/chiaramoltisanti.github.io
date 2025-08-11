# 🌐 Configurazione Dominio Personalizzato Aruba → Vercel

## Panoramica

Hai un dominio su Aruba e vuoi che punti al tuo sito su Vercel invece di usare il dominio `.vercel.app`.

## 🔧 Configurazione su Vercel

### 1. Aggiungi il Dominio su Vercel

1. **Vai nel tuo progetto su Vercel**
   - Dashboard → Il tuo progetto
   - Settings → Domains

2. **Aggiungi il dominio**
   - Clicca "Add"
   - Inserisci il tuo dominio (es. `psicologa-ragusa.it`)
   - Clicca "Add"

3. **Vercel ti mostrerà le configurazioni DNS necessarie**
   - Prendi nota dei valori che ti vengono mostrati

## 🌐 Configurazione DNS su Aruba

### Opzione 1: CNAME (Consigliata per www)

Se vuoi usare `www.tuodominio.it`:

1. **Accedi al pannello Aruba**
   - Vai su [admin.aruba.it](https://admin.aruba.it)
   - Accedi con le tue credenziali

2. **Vai nella gestione DNS**
   - Servizi → Domini → Gestione DNS
   - Seleziona il tuo dominio

3. **Aggiungi record CNAME**
   ```
   Tipo: CNAME
   Nome: www
   Valore: cname.vercel-dns.com
   TTL: 3600 (o il minimo disponibile)
   ```

4. **Redirect del dominio principale (opzionale)**
   - Configura un redirect da `tuodominio.it` a `www.tuodominio.it`

### Opzione 2: Record A (Per dominio principale)

Se vuoi usare direttamente `tuodominio.it` (senza www):

1. **Aggiungi record A**
   ```
   Tipo: A
   Nome: @ (o lascia vuoto)
   Valore: 76.76.19.61
   TTL: 3600
   ```

2. **Aggiungi anche il www (opzionale)**
   ```
   Tipo: CNAME
   Nome: www
   Valore: cname.vercel-dns.com
   TTL: 3600
   ```

### Opzione 3: Entrambi (Consigliata)

Per avere sia `tuodominio.it` che `www.tuodominio.it`:

1. **Record A per il dominio principale**
   ```
   Tipo: A
   Nome: @ 
   Valore: 76.76.19.61
   TTL: 3600
   ```

2. **Record CNAME per www**
   ```
   Tipo: CNAME
   Nome: www
   Valore: cname.vercel-dns.com
   TTL: 3600
   ```

## 📋 Configurazione Dettagliata Aruba

### 1. Accesso al Pannello

1. Vai su [admin.aruba.it](https://admin.aruba.it)
2. Inserisci username e password
3. Vai in "I miei prodotti" → "Domini"

### 2. Gestione DNS

1. Clicca sul tuo dominio
2. Vai in "Gestione DNS" o "DNS Management"
3. Cerca la sezione "Record DNS" o "DNS Records"

### 3. Modifica/Aggiungi Record

**Per Record A:**
- **Tipo**: A
- **Host/Nome**: @ (per il dominio principale) o www
- **Indirizzo IP**: `76.76.19.61`
- **TTL**: 3600 secondi

**Per Record CNAME:**
- **Tipo**: CNAME
- **Host/Nome**: www
- **Destinazione**: `cname.vercel-dns.com`
- **TTL**: 3600 secondi

### 4. Salva le Modifiche

- Clicca "Salva" o "Applica modifiche"
- Le modifiche DNS possono richiedere 24-48 ore per propagarsi

## ⏱️ Tempi di Propagazione

- **Minimo**: 15-30 minuti
- **Tipico**: 2-6 ore
- **Massimo**: 24-48 ore

## 🔍 Verifica Configurazione

### 1. Strumenti Online

- [whatsmydns.net](https://www.whatsmydns.net) - Verifica propagazione DNS
- [dnschecker.org](https://dnschecker.org) - Controllo DNS globale

### 2. Comando Terminal

```bash
# Verifica record A
nslookup tuodominio.it

# Verifica record CNAME
nslookup www.tuodominio.it
```

### 3. Su Vercel

- Vai in Settings → Domains
- Dovresti vedere il dominio con stato "Valid" ✅

## 🛠️ Troubleshooting

### Dominio non funziona dopo 24h

1. **Verifica i record DNS**
   - Controlla che i valori siano esatti
   - Verifica che non ci siano record conflittuali

2. **Controlla su Vercel**
   - Il dominio deve essere "Valid" nel dashboard
   - Se è "Invalid", clicca per vedere l'errore

3. **Contatta Aruba**
   - Se i record sembrano corretti ma non funziona
   - Potrebbero esserci restrizioni specifiche

### SSL/HTTPS non funziona

- Vercel genera automaticamente il certificato SSL
- Può richiedere fino a 24h dopo la configurazione DNS
- Il certificato si rinnova automaticamente

### Redirect non funziona

Se hai configurato sia `tuodominio.it` che `www.tuodominio.it`:
- Vercel gestisce automaticamente i redirect
- Puoi configurare quale versione è primaria in Settings → Domains

## 📧 Configurazione Email (Opzionale)

Se hai email con il dominio (es. `info@tuodominio.it`):

1. **Non toccare i record MX** esistenti
2. I record A e CNAME non influenzano le email
3. Le email continueranno a funzionare normalmente

## 🎯 Configurazione Consigliata

Per la maggior parte dei casi:

```dns
# Record A per dominio principale
@ → 76.76.19.61

# Record CNAME per www
www → cname.vercel-dns.com
```

Questo permette:
- ✅ `tuodominio.it` funziona
- ✅ `www.tuodominio.it` funziona
- ✅ Redirect automatico alla versione preferita
- ✅ SSL automatico per entrambe le versioni

## 📞 Supporto

### Aruba
- **Telefono**: 0575 0505
- **Email**: hosting@staff.aruba.it
- **Documentazione**: [guide.aruba.it](https://guide.aruba.it)

### Vercel
- **Documentazione**: [vercel.com/docs/concepts/projects/domains](https://vercel.com/docs/concepts/projects/domains)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

## ✅ Checklist Finale

- [ ] Dominio aggiunto su Vercel
- [ ] Record DNS configurati su Aruba
- [ ] Atteso 24-48h per propagazione
- [ ] Verificato con strumenti online
- [ ] SSL attivo (https funziona)
- [ ] Redirect configurati correttamente
- [ ] Email ancora funzionanti (se presenti)

Una volta completata la configurazione, il tuo sito sarà accessibile dal tuo dominio personalizzato invece che da `.vercel.app`!