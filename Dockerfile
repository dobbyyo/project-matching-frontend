FROM node:16.15.1-alpine

WORKDIR /frontend

COPY ["package.json", "yarn.lock", "/frontend/"]

EXPOSE 3000

COPY ./.next /frontend/.next

CMD yarn run start