const express = require('express');
const app = express();
const port = 3000;

// 假设 tasks 是一个包含任务信息的数组
let tasks = [];

app.use(express.json());

// 处理获取任务列表的请求
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// 处理添加新任务的请求
app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
