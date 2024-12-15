import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Импортируем node-fetch для выполнения запросов

const app = express();
const PORT = 8080;

// Используем CORS
app.use(cors());

// Пример эндпоинта для получения данных из внешнего API
app.get("/api/v1/employees", async (req, res) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/employees/?offset=0&limit=100`,
    );
    const data = await response.json();
    console.log(data);
    res.json(data); // Отправляем данные обратно клиенту
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка при получении данных" });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
