let todos = {
  name: "todos",
  rows: [
    {
      id: 1,
      name: "today",
      done: true,
    },
  ],
};

export const postNote = (req, res) => {
  const { text, done } = req.body;
  const id = Math.floor(Math.random() * 100);
  todos.rows.push({
    id: id,
    text: text,
    done: done,
  });
  res.send({
    id: id,
    success: true,
  });
};

export const getNote = (req, res) => {
  res.send(todos);
};

export const deleteNote = (req, res) => {
  const { id } = req.params;
  const index = todos.rows.findIndex((x) => x.id === parseInt(id));
  todos.rows.splice(index, 1);

  res.send({
    id: id,
    delete: true,
  });
};
