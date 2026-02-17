
function addField() {
    const labelText = document.getElementById("fieldLabel").value;
    const fieldType = document.getElementById("fieldType").value;
    const container = document.getElementById("dynamicFields");

    if (labelText.trim() === "") {
        alert("Enter field label");
        return;
    }

    const div = document.createElement("div");
    div.className = "form-group";

    const label = document.createElement("label");
    label.innerText = labelText;

    const input = document.createElement("input");
    input.type = fieldType;
    input.placeholder = "Enter " + labelText;

    div.appendChild(label);
    div.appendChild(input);

    container.appendChild(div);

    document.getElementById("fieldLabel").value = "";
}
