FROM node:alpine

WORKDIR /usr/app


COPY . .
RUN yarn install

EXPOSE 3000

ENTRYPOINT ["yarn","dev"]