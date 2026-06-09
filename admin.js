// ADMIN PANEL

const uploadForm =
document.getElementById(
  "uploadForm"
);

uploadForm.addEventListener(
  "submit",
  (e) => {

    e.preventDefault();

    // GET VALUES

    const title =
    document.getElementById(
      "mediaTitle"
    ).value;

    const description =
    document.getElementById(
      "mediaDescription"
    ).value;

    const file =
    document.getElementById(
      "mediaFile"
    ).files[0];

    // CREATE FILE URL

    const fileURL =
    URL.createObjectURL(file);

    // CREATE MEDIA OBJECT

    const mediaData = {

      title,
      description,
      fileURL,
      type:file.type

    };

    // GET EXISTING MEDIA

    const existingMedia =
    JSON.parse(
      localStorage.getItem(
        "mediaPosts"
      )
    ) || [];

    // ADD NEW MEDIA

    existingMedia.push(mediaData);

    // SAVE

    localStorage.setItem(
      "mediaPosts",
      JSON.stringify(existingMedia)
    );

    alert(
      "Media uploaded successfully!"
    );

    uploadForm.reset();

  }
);
