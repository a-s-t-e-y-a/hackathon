# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Install pnpm globally
RUN npm install -g pnpm

# Copy the pnpm configuration files
COPY package.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Install TypeScript globally
RUN npm install -g typescript

RUN npx prisma generate

# Compile TypeScript to JavaScript
RUN tsc

# Expose the port that your app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/src/server.js"]

