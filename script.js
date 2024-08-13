document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("inseft");
  const ul = document.getElementById("ul");
  const li = document.createElement("li")
  const delete_btn = document.createElement("button");
  delete_btn.textContent = "delete";
  delete_btn.classList.add("delete");
  li.append(input.value, delete_btn);
  li.className = "lina"
  ul.appendChild(li);
  delete_btn.addEventListener("click", () => {
    delete_btn.parentElement.remove();
  });
  form.reset();
});
