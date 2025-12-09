# ===========================
# STAGE BUILD
# ===========================
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN ls -R

# ===========================
# STAGE PRODUCTION
# ===========================
FROM node:20-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /app/dist ./dist

EXPOSE 3005

RUN ls -R

CMD ["node", "dist/index.js"]
