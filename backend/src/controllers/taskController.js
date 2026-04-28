const Task = require("../models/Task");

exports.createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Task title is required"
      });
    }

    const task = await Task.create({
      title,
      description,
      userId: req.user.id
    });

    res.status(201).json({
      message: "Task created successfully",
      task
    });
  } catch (error) {
    next(error);
  }
};

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      where: {
        userId: req.user.id
      },
      order: [["createdAt", "DESC"]]
    });

    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;

    const task = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;

    await task.save();

    res.status(200).json({
      message: "Task updated successfully",
      task
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    await task.destroy();

    res.status(200).json({
      message: "Task deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};