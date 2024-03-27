let url = "women.json";
let clothes = document.getElementsByClassName('clothes')[0];

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const { id, Img, Img1, Name, Category, MRP, Price } = product;

      // Create an anchor tag for the product card and set its href attribute to the product detail page
      let productLink = document.createElement('a');
      productLink.href = `product1.html?id=${id}`;
      productLink.classList.add('card'); // Keep the 'card' class for styling consistency

      // Create the product card content
      productLink.innerHTML = `
        <img src="${Img}" alt="${Name}" />
        <div class="content">
          <h2 class="card_title" title="${Name}">${Name}</h2>
          <p>${Category} Clothing</p>
          <div class="price">
            <h5>Rs ${Price}</h5>
            <h5>MRP: <del>RS ${MRP}</del></h5>
          </div>
        </div>
      `;

      // Add event listeners for mouseover and mouseout
      productLink.addEventListener('mouseover', function() {
        // Change the image source on hover
        productLink.querySelector('img').src = Img1;
      });

      productLink.addEventListener('mouseout', function() {
        // Change the image source back to original on mouseout
        productLink.querySelector('img').src = Img;
      });

      // Append the product card (anchor tag) to the clothes container
      clothes.appendChild(productLink);
    });
  })
  .catch(error => {
    console.error('Error fetching and displaying products:', error);
  });

