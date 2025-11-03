FROM nginx:alpine

# Remove all files from nginx html directory
RUN rm -rf /usr/share/nginx/html/*

# Copy static site files to nginx html directory
COPY . /usr/share/nginx/html/

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Set permissions for Nginx directories.
# The nginx user is part of the nginx group in the base image.
RUN touch /var/run/nginx.pid \
    && chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Switch to non-root user
USER nginx

# Start nginx server
# By default, the nginx image has an entrypoint that performs configuration.
# We override it to ensure our custom nginx.conf is used without interference
# and to prevent the startup script from trying to write to protected directories.
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]