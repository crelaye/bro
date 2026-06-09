// MEDIA GALLERY SLIDER

const mediaData = [

  {
    image:"./WhatsApp Image 2026-05-27 at 12.43.58 (1).jpeg",

    title:
    "Community Outreach Program",

    description:
    "Empowering communities through leadership and development."
  },

  {
    image: "./WhatsApp Image 2026-05-27 at 12.43.58 (1).jpeg",

    title:
    "Youth Empowerment Event",

    description:
    "Supporting young people through mentorship and skill development."
  },

  {
    image: "./WhatsApp Image 2026-05-27 at 12.44.43 (1).jpeg",

    title:
    "Rendering Donations to an elder.",

    description:
    "Providing healthcare support and awareness initiatives."
  },

  {
    image: "./WhatsApp Image 2026-05-27 at 12.44.40 (1).jpeg",

    title:
    "Football Team Creation",

    description:
    "Engaging the youths in activities they show deep enthusiasm."
  }

];

let mediaIndex = 0;

const mediaImage =
document.getElementById(
  "mediaImage"
);

const mediaTitle =
document.querySelector(
  ".media-overlay h3"
);

const mediaDescription =
document.querySelector(
  ".media-overlay p"
);

const nextMedia =
document.querySelector(
  ".nextMedia"
);

const prevMedia =
document.querySelector(
  ".prevMedia"
);

/* UPDATE FUNCTION */

function updateMedia(){

  mediaImage.src =
  mediaData[mediaIndex].image;

  mediaTitle.textContent =
  mediaData[mediaIndex].title;

  mediaDescription.textContent =
  mediaData[mediaIndex].description;
}

/* NEXT BUTTON */

nextMedia.addEventListener(
  "click",
  () => {

    mediaIndex++;

    if(
      mediaIndex >= mediaData.length
    ){
      mediaIndex = 0;
    }

    updateMedia();

  }
);

/* PREVIOUS BUTTON */

prevMedia.addEventListener(
  "click",
  () => {

    mediaIndex--;

    if(mediaIndex < 0){
      mediaIndex =
      mediaData.length - 1;
    }

    updateMedia();

  }
);

// GET CONTAINER

const mediaContainer =
document.getElementById(
  "mediaContainer"
);

// GET DATA FROM LOCALSTORAGE

const mediaPosts =
JSON.parse(
  localStorage.getItem(
    "mediaPosts"
  )
) || [];

// CHECK IF EMPTY

if(mediaPosts.length === 0){

  mediaContainer.innerHTML = `

    <p class="empty-message">
      No media uploaded yet.
    </p>

  `;

}else{

  // LOOP THROUGH POSTS

  mediaPosts.forEach(post => {

    // CREATE CARD

    const mediaCard =
    document.createElement("div");

    mediaCard.classList.add(
      "media-card"
    );

    // IMAGE

    if(
      post.type.startsWith(
        "image"
      )
    ){

      mediaCard.innerHTML = `

        <img
          src="${post.fileURL}"
          alt=""
        >

        <div class="media-content">

          <h3>
            ${post.title}
          </h3>

          <p>
            ${post.description}
          </p>

        </div>

      `;

    }

    // VIDEO

    else if(
      post.type.startsWith(
        "video"
      )
    ){

      mediaCard.innerHTML = `

        <video controls>

          <source
            src="${post.fileURL}"
            type="${post.type}"
          >

        </video>

        <div class="media-content">

          <h3>
            ${post.title}
          </h3>

          <p>
            ${post.description}
          </p>

        </div>

      `;

    }

    // APPEND

    mediaContainer.appendChild(
      mediaCard
    );

  });

}