# Usa la imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos del proyecto al directorio de trabajo en el contenedor
COPY . .

# Compila y crea el bundle de producción
RUN npm run build

# Expone el puerto 8080
EXPOSE 8080

# Comando que se ejecutará cuando el contenedor se inicie
CMD [ "npm", "run", "serve" ]
