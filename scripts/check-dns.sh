#!/bin/bash

# Script per verificare la configurazione DNS del dominio personalizzato
# Uso: ./scripts/check-dns.sh tuodominio.it

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Funzioni per output colorato
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

# Verifica che sia stato fornito un dominio
if [ $# -eq 0 ]; then
    print_error "Uso: $0 <tuodominio.it>"
    exit 1
fi

DOMAIN=$1

echo "🔍 Verificando la configurazione DNS per: $DOMAIN"
echo "=================================================="

# Verifica record A per il dominio principale
print_status "Verificando record A per $DOMAIN..."
A_RECORD=$(nslookup $DOMAIN | grep "Address:" | tail -1 | awk '{print $2}')

if [ "$A_RECORD" = "76.76.19.61" ]; then
    print_success "Record A corretto: $A_RECORD"
else
    print_warning "Record A: $A_RECORD (dovrebbe essere 76.76.19.61)"
fi

# Verifica record CNAME per www
print_status "Verificando record CNAME per www.$DOMAIN..."
CNAME_RECORD=$(nslookup www.$DOMAIN | grep "canonical name" | awk '{print $4}' | sed 's/\.$//')

if [[ "$CNAME_RECORD" == *"vercel-dns.com"* ]]; then
    print_success "Record CNAME corretto: $CNAME_RECORD"
else
    print_warning "Record CNAME: $CNAME_RECORD (dovrebbe puntare a cname.vercel-dns.com)"
fi

# Test di connettività HTTP
print_status "Testando connettività HTTP..."
if curl -s -o /dev/null -w "%{http_code}" http://$DOMAIN | grep -q "200\|301\|302"; then
    print_success "HTTP funziona per $DOMAIN"
else
    print_error "HTTP non funziona per $DOMAIN"
fi

# Test di connettività HTTPS
print_status "Testando connettività HTTPS..."
if curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN | grep -q "200\|301\|302"; then
    print_success "HTTPS funziona per $DOMAIN"
else
    print_warning "HTTPS non funziona per $DOMAIN (potrebbe essere ancora in configurazione)"
fi

# Test per www
print_status "Testando www.$DOMAIN..."
if curl -s -o /dev/null -w "%{http_code}" https://www.$DOMAIN | grep -q "200\|301\|302"; then
    print_success "HTTPS funziona per www.$DOMAIN"
else
    print_warning "HTTPS non funziona per www.$DOMAIN"
fi

echo ""
echo "🌐 Link utili per verificare la propagazione DNS:"
echo "• https://www.whatsmydns.net/#A/$DOMAIN"
echo "• https://www.whatsmydns.net/#CNAME/www.$DOMAIN"
echo "• https://dnschecker.org/#A/$DOMAIN"

echo ""
echo "📋 Riassunto configurazione:"
echo "• Record A ($DOMAIN): $A_RECORD"
echo "• Record CNAME (www.$DOMAIN): $CNAME_RECORD"

if [ "$A_RECORD" = "76.76.19.61" ] && [[ "$CNAME_RECORD" == *"vercel-dns.com"* ]]; then
    print_success "✅ Configurazione DNS corretta!"
    echo "Se il sito non funziona ancora, attendi fino a 48h per la propagazione DNS."
else
    print_warning "⚠️  Configurazione DNS da verificare."
    echo "Controlla i record DNS nel pannello Aruba."
fi