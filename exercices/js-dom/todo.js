let add = document.getElementById("add");
const input = document.getElementById("input");

let counter = document.getElementById("counter");
add.disabled = true;

let ul = document.getElementById("ul");

function inputFull() {
  if (input.value != "") {
    add.disabled = false;
  } else {
    add.disabled = true;
  }
}

let count = 0;

add.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = input.value;
  count++;
  counter.textContent = count;
  let trash = document.createElement("div");
  trash.textContent = "❌";
  li.append(trash);

  trash.addEventListener("click", () => {
    li.remove();
    count--;
    counter.textContent = count;
  });
  ul.append(li);

  input.value = "";
  li.addEventListener("click", () => {
    if (li.classList.contains("lined")) {
      li.classList.remove("lined");
    } else {
      li.classList.add("lined");
    }
  });
  inputFull();
});
