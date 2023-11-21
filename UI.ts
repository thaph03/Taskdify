const UIhandling = () => {
  const addContainer = document.querySelector(
    ".addContainer"
  ) as HTMLDivElement;
  const addBtn = document.querySelector(".add") as HTMLDivElement;

  const openAddForm = (): void => {
    addContainer.innerHTML = "";
    const addForm = document.createElement("form") as HTMLFormElement;
    addContainer.appendChild(addForm);
    addForm.classList.add("addForm");

    const inputText = document.createElement("input") as HTMLInputElement;
    inputText.setAttribute("type", "text");
    inputText.classList.add("inputText");
    addForm.appendChild(inputText);

    const inputBtns = document.createElement("div") as HTMLDivElement;
    addForm.appendChild(inputBtns);
    inputBtns.classList.add("inputBtns");
    const inputBtnAdd = document.createElement("button") as HTMLButtonElement;
    inputBtnAdd.setAttribute("type", "button");
    inputBtnAdd.textContent = "Add";
    const inputBtnCancel = document.createElement(
      "button"
    ) as HTMLButtonElement;
    inputBtnCancel.setAttribute("type", "button");
    inputBtnCancel.textContent = "Cancel";
    inputBtnAdd.classList.add("formButtons1");
    inputBtnCancel.classList.add("formButtons2");
    inputBtns.appendChild(inputBtnAdd);
    inputBtns.appendChild(inputBtnCancel);

    inputBtnCancel.addEventListener("click", (): void => {
      addContainer.innerHTML = "";
      addContainer.appendChild(addBtn);
    });
  };

  addBtn.addEventListener("click", openAddForm);
};

export { UIhandling };
