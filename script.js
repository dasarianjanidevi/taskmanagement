document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.querySelector('.add-task-btn');
    const assignBtn = document.querySelector('.assign-btn');
    const backBtn = document.querySelector('.back-btn');

    const addTaskSection = document.querySelector('.add-task');
    const taskSuccessSection = document.querySelector('.task-success');

    // Show the "Add Task" section when the "Add Task" button is clicked
    addTaskBtn.addEventListener('click', () => {
        addTaskSection.style.display = 'block';
        taskSuccessSection.style.display = 'none';
    });

    // Show the "Task Success" section after assigning the task
    assignBtn.addEventListener('click', () => {
        addTaskSection.style.display = 'none';
        taskSuccessSection.style.display = 'block';
    });

    // Hide the "Task Success" section and go back to the main view
    backBtn.addEventListener('click', () => {
        taskSuccessSection.style.display = 'none';
        addTaskSection.style.display = 'block';
    });
});