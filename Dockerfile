# Estágio 1: Build
FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --production

# Estágio 2: Nginx
FROM nginx:alpine
# Copia os arquivos de build para a pasta padrão do Nginx
COPY --from=build /app/dist/consultorio-web/browser /usr/share/nginx/html
# Copia arquivo de configuração personalizado do Nginx (opcional, mas recomendado)
# COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]