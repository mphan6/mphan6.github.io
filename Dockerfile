# Use a base image
FROM node:18-alpine

# Copy the web application files to the container
COPY . /app/
WORKDIR /app
RUN npm install

RUN npm i -g serve

RUN npm run build

# Start the nginx server
CMD ["serve", "-s", "dist"]