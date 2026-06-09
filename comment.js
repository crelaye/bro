// COMMENT SYSTEM

const submitBtn =
document.getElementById(
  "submitComment"
);

const commentInput =
document.getElementById(
  "commentInput"
);

const commentsContainer =
document.getElementById(
  "commentsContainer"
);

/* SUBMIT COMMENT */

submitBtn.addEventListener(
  "click",
  () => {

    const commentText =
    commentInput.value.trim();

    if(commentText === ""){
      alert(
        "Please write a comment first."
      );
      return;
    }

    // PROMPT FOR NAME

    const userName = prompt(
      "Enter your name:"
    );

    if(!userName){
      return;
    }

    // PROMPT FOR LOCATION

    const userLocation = prompt(
      "Where are you commenting from?"
    );

    if(!userLocation){
      return;
    }

    // CREATE COMMENT CARD

    const commentCard =
    document.createElement("div");

    commentCard.classList.add(
      "comment-card"
    );

    commentCard.innerHTML = `

      <div class="comment-top">

        <h3>${userName}</h3>

        <span>${userLocation}</span>

      </div>

      <p>${commentText}</p>

    `;

    // ADD TO PAGE

    commentsContainer.prepend(
      commentCard
    );

    // CLEAR INPUT

    commentInput.value = "";

  }
);