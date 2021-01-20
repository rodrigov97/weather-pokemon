FROM node:10.19.0

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./
COPY yarn.lock ./

RUN yarn global add @angular/cli@latest

RUN yarn install

COPY . .

EXPOSE 4200

CMD ["yarn", "start"]