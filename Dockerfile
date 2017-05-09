FROM node:latest

ENV NODE_ENV production
ENV NODE_PORT 3000

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install
# Build `next`
RUN npm run build

# Bundle app source
COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]
