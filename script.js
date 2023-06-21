(function () {
    const customerImage = document.querySelector("#customer-img");
    const customername = document.querySelector(".customer-name");
    const customerText = document.querySelector(".customer-text");
  
    const btn = document.querySelectorAll(".btn");
    let index = 0;
    const customers = [];
  
    function Customer(img, name, text) {
      this.img = img;
      this.name = name;
      this.text = text;
    }
  
    function createCustomer(img, name, text) {
        let imagePath = `./img/${img}.jpg`; // Rename the variable to imagePath
        let customer = new Customer(imagePath, name, text); // Use imagePath instead of img
        customers.push(customer);
    }
  
    createCustomer(1, 'Harshil', 'Lorem ipsum dolor sit sed eius illo veniam adipisci quod perspiciatis soluta, pariatur saepe, debitis non.');
    createCustomer(2, 'Karan', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed eius illo veniam adipisci quod perspiciatis soluta, pariatur saepe, debitis non.');
    createCustomer(3, 'Rishabh', 'Lorem ipsum dolor sit amet consectetur adipisicing  veniam adipisci quod perspiciatis soluta, pariatur saepe, debitis non.');
    createCustomer(4, 'Gupta', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed eius illo veniam adipisci quod perspiciatis soluta, pariatur saepe, debitis non.');
    createCustomer(5, 'Sona', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed eius illo veniam adipisci quod perspiciatis soluta, pariatur saepe, debitis non.');
  
    btn.forEach(function (button) {
      button.addEventListener('click', function (e) {
        if (e.target.parentElement.classList.contains('prevBtn')) {
          if (index === 0) {
            index = customers.length;
          }
          index--;
          customerImage.src = customers[index].img;
          customername.textContent = customers[index].name;
          customerText.textContent = customers[index].text;
        }
        if (e.target.parentElement.classList.contains('nextBtn')) {
          index++;
          if (index === customers.length) {
            index = 0;
          }
          customerImage.src = customers[index].img;
          customername.textContent = customers[index].name;
          customerText.textContent = customers[index].text;
        }
      });
    });
  })();
  
