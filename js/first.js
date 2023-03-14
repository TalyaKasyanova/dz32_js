const text = document.getElementById("text").textContent;
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "e") {
    event.preventDefault();
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.getElementById("text").replaceWith(textarea);

    textarea.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        const div = document.createElement("div");
        div.textContent = textarea.value;
        div.className = "new-div";
        textarea.replaceWith(div);
      }
    });
  }
});