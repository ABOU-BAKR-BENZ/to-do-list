const myButton = document.getElementById("button-addon2");
const myInput = document.getElementById("myInput");
const myList = document.getElementById("myList");
const myALert = document.getElementById("alert");

myButton.addEventListener("click", function () {
  if (myInput.value === "") {
    myALert.innerHTML = `<div class="alert alert-danger border-top-0 border-danger border-2 " role="alert">
    Please Enter a Task.!
  </div>`;
    myALert.classList.add(
      "w-75",
      "text-center",
      "mx-auto",
      "fw-bolder",
      "fs-4"
    );
    window.setInterval(function () {
      myALert.innerHTML = ``;
    }, 5000);
  } else {
    const newTask = document.createElement("li");
    newTask.innerText = `${myInput.value}`;
    newTask.classList.add(
      "list-group-item",
      "bg-light",
      "p-3",
      "pt-2",
      "mx-auto",
      "w-100",
      "rounded-5",
      "fs-4",
      "fw-bold",
      "font-monospace",
      "border",
      "border-secondary",
      "border-2"
    );
    myList.appendChild(newTask);

    const doneButton = document.createElement("button");
    doneButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>`;
    doneButton.classList.add(
      "btn",
      "btn-outline-success",
      "border-2",
      "ms-lg-4",
      "me-lg-4",
      "ms-1",
      "float-end"
    );
    newTask.appendChild(doneButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
  </svg>`;
    deleteButton.classList.add(
      "btn",
      "btn-outline-danger",
      "border-2",
      "float-end"
    );
    newTask.appendChild(deleteButton);

    myInput.value = "";

    doneButton.addEventListener("click", function () {
      newTask.classList.add("text-decoration-line-through");
    });

    deleteButton.addEventListener("click", function () {
      newTask.remove();
    });
  }
});
