import todo from "../Model/TodoModel.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = await todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await todo.find({}).sort({ createdAt: -1 });

    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


export const toggleTodoDone = async (req, res) => {
    try {
        const todoRef = await todo.findById(req.params.id);

        const todos = await todo.findOneAndUpdate(
            { _id: req.params.id },
            { done: !todoRef.done }
        )

        await todos.save();

        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
export const UpdateTodo = async (req, res) => {
    try {

        await todo.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.data }
        )

       const Todo = await todo.findById(req.params.id) 

        return res.status(200).json(Todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const DeleteTodo = async (req, res) => {
    try {

        const Todo =  await todo.findOneAndDelete(req.body.data)

        return res.status(200).json(Todo);
    } catch (error) {
        return res.status(500).json(error.message);     
    }
}
