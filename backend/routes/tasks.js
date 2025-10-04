const express = require('express');
const pool = require('../db/config');

module.exports = function (io) {
  const router = express.Router();

  router.post('/task', async (req, res) => {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Título é obrigatório' });
    }
    try {
      const [result] = await pool.query('INSERT INTO tasks (title) VALUES (?)', [title]);
      const newTask = {
        id: result.insertId,
        title,
        created_at: new Date(),
      };

      io.emit('new task', newTask);
      return res.status(201).json(newTask);
    } catch (error) {
      console.error('Erro ao inserir:', error);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
  });

  router.get('/tasks', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');

      io.emit(`get ${rows.length} tasks`);
      return res.status(200).json(rows);
    } catch (error) {
      console.error('Erro ao buscar:', error);
      return res.status(500).json({ error: 'Erro no servidor' });
    }
  });

  router.put('/task/:id', async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Título é obrigatório' });
    }

    io.emit(`task ${id} edited`);
    const [result] = await pool.query('UPDATE tasks SET title = ? WHERE id = ?', [title, id]);
    return res.status(200).json({ id: Number(id), result });
  });

  router.delete('/task/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM tasks WHERE id = ?', [id]);

    io.emit(`task ${id} deleted`);
    return res.status(200).json({ msg: 'Tarefa removida' });
  });

  return router;
};
