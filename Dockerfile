# Base Image
FROM node:14    

# Port the container should listen to
EXPOSE 3000


# Use latest version of npm
RUN npm install npm@latest -g

# Copies from source to destination (is that a pointer?)
COPY package.json package-lock.json* ./

RUN npm install --no-optional && npm cache clean --force


# copy source code last, as it changes most
WORKDIR /usr

COPY . .

CMD [ "node", "app/server.js"]

