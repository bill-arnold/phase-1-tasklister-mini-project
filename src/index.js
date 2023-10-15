document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add submit event listener to the form
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input value from the form
    const taskDescription = document.getElementById("new-task-description").value;

    // Create a new list item
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;

    // Add the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    form.reset();
  });
});
