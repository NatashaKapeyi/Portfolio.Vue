# Use an official Node.js image as the base
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files into the container
COPY . .

# Expose the port that your application uses
EXPOSE 80

# Run the command to start your application
CMD ["npm", "run", "start"]