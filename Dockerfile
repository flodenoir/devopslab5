FROM node:17
WORKDIR /
COPY . .
RUN npm install
CMD ["node", "main.js"]
EXPOSE 80