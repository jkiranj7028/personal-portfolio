FROM nginx:alpine

# Create a non-root user and group
RUN addgroup -S nginxgroup && adduser -S nginxuser -G nginxgroup

# Remove all files from nginx html directory
RUN rm -rf /usr/share/nginx/html/*

# Copy static site files to nginx html directory
COPY . /usr/share/nginx/html

# Change ownership of html directory
RUN chown -R nginxuser:nginxgroup /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Switch to non-root user
USER nginxuser

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]