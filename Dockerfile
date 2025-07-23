# Gunakan image PHP dengan ekstensi yang dibutuhkan
FROM php:8.3-cli

RUN apt-get update && apt-get install -y \
    git unzip curl libzip-dev libpng-dev libonig-dev libxml2-dev

# Install Node.js (LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs

# Set working directorys
WORKDIR /app

# Copy composer dan npm files
COPY composer.json package.json ./

# Copy .env file
COPY .env .env

# Copy certificate
COPY storage/certs/isrgrootx.pem storage/certs/isrgrootx.pem

# Copy seluruh source code ke container
COPY . .

# Install PHP GD extension (required by simplesoftwareio/simple-qrcode)
RUN docker-php-ext-install gd

# Install composer dependencies
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Install npm dependencies & build assets
RUN npm install
RUN chmod +x node_modules/.bin/vite
RUN npm run build

# Install database extension
RUN docker-php-ext-install pdo_mysql

# Pastikan permission folder
RUN chown -R www-data:www-data storage bootstrap/cache && chmod -R 775 storage bootstrap/cache

# Buat symbolic link untuk storage
RUN php artisan storage:link

# Bersihkan cache konfigurasi
RUN php artisan config:clear && php artisan config:cache

# Expose port
EXPOSE 8000

# Jalankan Laravel development server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
