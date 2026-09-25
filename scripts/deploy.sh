#!/bin/bash
set -e

exec >> ../logs/deploy.log 2>&1

echo "=== Lancement du déploiement : $(date) ==="

echo "🍰🍰🌍🪐 Début du déploiement.... 🍰🍰🌍🪐"

PROJECT_DIR="/mnt/c/Users/Administrateur/Documents/cda-positionnement"
WEB_DIR="/var/www/cda-positionnement"

cd "$PROJECT_DIR" || { echo "[X] Dossier introuvable"; exit 1; }

echo "--> Téléchargement des dernières modifications depuis Git"
git pull origin main

echo "--> synchronise les fichiers avec le dossier web Nginx"

if sudo cp -r "$PROJECT_DIR"/* "$WEB_DIR/"; then
  echo "[OK] Fichiers synchronisés avec succès"
else
  echo "[X] Erreur lors de la synchronisation avec nginx"
  exit 1
fi

echo "--> Relance Nginx pour appliquer changement"

if sudo service nginx reload; then
  echo "[OK] Nginx reload"
else
  echo "[X]Erreur Nginx reload"
  exit 1
fi
echo "🎉🎉✨✨ Déploiement terminé 🎉🎉✨✨"