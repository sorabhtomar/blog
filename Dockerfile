FROM node:alpine

ENV NODE_ENV production
ENV NODE_PORT 3000

# Create app directory
RUN mkdir /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
COPY yarn.lock /app
# RUN npm install
RUN yarn install --production

# Bundle app source
COPY . /app

# Build `next`
# RUN npm run build
RUN yarn run build

EXPOSE 3000
# CMD [ "npm", "start" ]
CMD [ "yarn", "start" ]
