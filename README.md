# Ajout du CI/CD dans un projet Todo List

|NOM|Prénom|
|---|------|
|CAMARA|Diangou  |
|KOKONYANGE-NKASEI|Laura  |
|MOREAU-LITTRE|Talyha  |

## Architecture et choix techniques

Notre projet est composé de trois parties principales : le **frontend -> packages/**, le **backend -> server/** et le **Pipeline CI/CD -> .github/workflows**.  
- **Backend** : Expose une API REST pour gérer les données. Déployé sur **Render**.  
- **Frontend** : Consomme l’API du backend pour afficher les informations à l’utilisateur. Déployé sur **Vercel**.
- **Pipeline CI/CD** : GitHub Actions pour automatiser tests et déploiement.  

**Choix techniques :**  
- Utilisation de Docker pour uniformiser l’environnement de production.  
- Tests unitaires des routes API pour garantir la qualité du code.  
- Déploiement automatisé de chaque version sur Render (backend) et Vercel (frontend) via la pipeline CI/CD.

---

## Accès aux environnements déployés

- **Frontend (Vercel) :** [https://todos-client-server-kappa.vercel.app/](https://todos-client-server-kappa.vercel.app/)
- **Backend (Render) :**[https://todo-backend-n14j.onrender.com/](https://todo-backend-n14j.onrender.com/)

---

## CI/CD et stratégie de déploiement

La pipeline CI/CD est composée des jobs suivants :  

1. **Build** : Compilation et construction des images Docker pour le backend et du frontend.  
2. **Test** : Exécution des tests unitaires et d’intégration.  
3. **Lint** : Vérification du code pour respecter les standards définis.  
4. **Deploy** : Déploiement automatique :  
   - Frontend sur **Vercel**  
   - Backend sur **Render**  

**Stratégie de déploiement :**  
- Chaque build est tagué avec le numéro de version, ex : `v1.0.1`, `v1.0.2`.  
- Déploiement progressif avec vérification de santé de l’application.  

---

## Stratégie de rollback

Si la version actuelle (`v1.0.2`) présente des bugs critiques :  
1. Identifier la version stable précédente (`v1.0.1`).  
2. Redéployer l’image Docker correspondante du backend sur Render via le tag `v1.0.1`.  
3. Revenir à la version précédente du frontend sur Vercel si nécessaire (Vercel garde l’historique des déploiements).  
4. Vérifier que tous les services fonctionnent correctement.
