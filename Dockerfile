FROM node:14

# Rely on the database service during build
ARG MONGODB_URI

# Copy utility script to wait for database availability
COPY wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh

# Copy source files into the correct place & install dependencies
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . .

# Wait for database availability and build project
RUN /usr/wait-for-it.sh --timeout=0 mongo:27017 && yarn build

# Expose ports
EXPOSE 3000