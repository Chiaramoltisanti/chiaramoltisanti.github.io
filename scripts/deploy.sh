#!/bin/bash

# Script di deploy automatico per Vercel
# Uso: ./scripts/deploy.sh

echo "🚀 Iniziando il processo di deploy..."

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Funzione per stampare messaggi colorati
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 1. Verifica che siamo nella directory corretta
if [ ! -f "package.json" ]; then
    print_error "package.json non trovato. Assicurati di essere nella root del progetto."
    exit 1
fi

print_status "Verificando la configurazione del progetto..."

# 2. Verifica che le dipendenze siano installate
if [ ! -d "node_modules" ]; then
    print_warning "node_modules non trovato. Installando le dipendenze..."
    npm install
fi

# 3. Verifica che .env.local esista
if [ ! -f ".env.local" ]; then
    print_warning ".env.local non trovato. Copiando da .env.example..."
    if [ -f ".env.example" ]; then
        cp .env.example .env.local
        print_warning "⚠️  Ricordati di configurare le variabili in .env.local!"
    else
        print_error ".env.example non trovato. Crea il file .env.local manualmente."
    fi
fi

# 4. Test build locale
print_status "Testando il build locale..."
if npm run build; then
    print_success "Build locale completato con successo!"
    print_status "File statici generati in ./out/"
else
    print_error "Build locale fallito. Correggi gli errori prima del deploy."
    exit 1
fi

# 5. Verifica Git status
print_status "Verificando lo stato di Git..."
if [ -n "$(git status --porcelain)" ]; then
    print_warning "Ci sono modifiche non committate. Vuoi commitarle? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        git add .
        echo "Inserisci il messaggio di commit:"
        read -r commit_message
        git commit -m "$commit_message"
        print_success "Modifiche committate!"
    fi
fi

# 6. Push su GitHub
print_status "Pushando su GitHub..."
if git push; then
    print_success "Push completato!"
else
    print_error "Push fallito. Verifica la connessione a GitHub."
    exit 1
fi

# 7. Verifica se Vercel CLI è installato
if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI non installato. Vuoi installarlo? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        npm install -g vercel
    else
        print_status "Puoi deployare manualmente su vercel.com"
        print_status "1. Vai su https://vercel.com"
        print_status "2. Importa il repository GitHub"
        print_status "3. Configura le variabili d'ambiente"
        print_status "4. Deploy!"
        exit 0
    fi
fi

# 8. Deploy con Vercel CLI
print_status "Deployando su Vercel..."
if vercel --prod; then
    print_success "🎉 Deploy completato con successo!"
    print_success "Il tuo sito è ora online!"
else
    print_error "Deploy fallito. Controlla i logs di Vercel."
    exit 1
fi

echo ""
print_success "✅ Processo di deploy completato!"
print_status "Controlla il tuo sito su Vercel Dashboard: https://vercel.com/dashboard"