# ===========================
# STAGE BUILD
# ===========================
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm ci

COPY . .

RUN npm run build

# ===========================
# STAGE PRODUCTION
# ===========================
FROM node:20-alpine AS production

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 3005

CMD ["node", "dist/server.js"]
