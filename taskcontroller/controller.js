const conn = require('../config/database');
// Get all tasks
exports.getAllTasks = (req, res) => {
    conn.query("SELECT * FROM task;", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.json(result);
    });
};


// Delete task
exports.deleteTask = (req, res) => {
    const { taskId } = req.params;

    conn.query("DELETE FROM task WHERE task_id=?;", [taskId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Task not found" });

        res.json({ message: "Task deleted successfully" });
    });
};

// Add task
exports.addTask = (req, res) => {
    const { task_name } = req.body;

    if (!task_name || task_name.trim() === "") {
        return res.status(400).json({ error: "Task name is required" });
    }

    conn.query("INSERT INTO task(Task) VALUES(?);", [task_name], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        res.json({
            message: "Task added successfully",
            taskId: result.insertId
        });
    });
};