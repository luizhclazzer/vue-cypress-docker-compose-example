FROM node:15-alpine

RUN npm install -g http-server

WORKDIR /src

COPY package*.json ./

# RUN yarn

COPY . .

RUN chmod 777 ./init.sh

ENTRYPOINT [ "./init.sh" ]
