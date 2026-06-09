// SUPPORT FORM

const supportForm =
document.getElementById(
  "supportForm"
);

supportForm.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();

    const name =
    document.getElementById(
      "name"
    ).value;

    alert(
      `Thank you ${name}, your message has been received successfully.`
    );

    supportForm.reset();

  }
);

console.log(
  "Contact section loaded"
);