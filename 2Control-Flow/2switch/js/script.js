console.log("Select an option:\na. Option 1 \nb.Option 2\nc.Option 3\n");
choice = prompt();
var text;

switch (choice) {
    case "a":
        text = "Option 1 is selected";
        break;
    case "b":
        text = "Option 2 is selected";
        break;
    case "c":
        text = "Option 3 is selected";
        break;
    default:
        text = "No option is selected";
        break;
}

console.log(text);