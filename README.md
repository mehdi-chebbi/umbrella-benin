# Projet UMBRELLA — Neutralité en matière de Dégradation des Terres (NDT)

Plateforme de suivi et d'évaluation des indicateurs NDT au Bénin.

## Structure du Projet

```
project/
├── docker-compose.yml      # Lance toute l'application
├── frontend/               # React + Vite + Tailwind CSS
├── backend/                # Express + PostgreSQL
└── .design-skill-ref/      # Référence de design
```

## Démarrage Rapide

```bash
docker compose up --build
```

L'application sera disponible sur :
- **Frontend** : http://localhost
- **Backend API** : http://localhost:4000
- **Base de données** : localhost:5432

## Administration

- **URL** : http://localhost/admin
- **Identifiants** : admin / admin123

## Technologies

- **Frontend** : React 18, Vite, Tailwind CSS 3, TypeScript
- **Backend** : Express.js, TypeScript, pg (node-postgres)
- **Base de données** : PostgreSQL 16
- **Authentification** : JWT + bcrypt

## Partenaires

- OSS (Observatoire du Sahara et du Sahel)
- FEM/GEF (Fonds pour l'Environnement Mondial)
- PNUE/UNEP (Programme des Nations Unies pour l'Environnement)
- Ministère de l'Environnement — République du Bénin
