    const form = document.getElementById('artForm');
    const gallery = document.getElementById('gallery');
    const errorMsg = document.getElementById('errorMsg');

    function validateInput(title, imageUrl, description) {
      if (!title || !imageUrl || !description) {
        errorMsg.textContent = "Please fill in all fields.";
        return false;
      }
      try {
        new URL(imageUrl);
      } catch (_) {
        errorMsg.textContent = "Please enter a valid image URL.";
        return false;
      }
      errorMsg.textContent = "";
      return true;
    }

    function createArtCard(title, imageUrl, description) {
      const artDiv = document.createElement('div');
      artDiv.className = 'art-piece';
      artDiv.innerHTML = `
        <img src="${imageUrl}" alt="${title}" />
        <h3>${title}</h3>
        <p>${description}</p>
      `;
      return artDiv;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const title = document.getElementById('title').value.trim();
      const imageUrl = document.getElementById('imageUrl').value.trim();
      const description = document.getElementById('description').value.trim();

      if (!validateInput(title, imageUrl, description)) return;

      const artCard = createArtCard(title, imageUrl, description);
      gallery.prepend(artCard);

      form.reset();
    });
