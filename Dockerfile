# Use the official Node image
FROM node:14

# Set work directory
WORKDIR /dosXdev/banQuest-UI

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Run the application
CMD ["serve", "-s", "build"]