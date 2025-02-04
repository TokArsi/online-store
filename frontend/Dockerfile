# Используем Node.js как базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Собираем проект
RUN npm run build

# Устанавливаем сервер для раздачи статики
RUN npm install -g serve

# Экспонируем порт для фронтенда
EXPOSE 3000

# Запускаем сервер для раздачи статики
CMD ["serve", "-s", "dist", "-l", "3000"]
