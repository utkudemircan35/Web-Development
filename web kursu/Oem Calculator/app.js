//  Storage Controller
const StorageController = (function() {

})();

//  Product Controller
const ProductController = (function() {
    //  private
    const Product = function(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products: [],
        selectedProduct: null,
        totalPrice: 0
    }

    return {
        getProducts: function() {
            return data.products;
        },
        getData: function() {
            return data;
        },
        AddProduct: function(name, price) {
            let id;

            if (data.products.length > 0) {
                id = data.products.length + 1;
            } else {
                id = 1;
            }

            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);
            return newProduct;
        },
        getTotal: function() {
            let total = 0;
            data.products.forEach(prd => {
                total += prd.price;
            });
            data.totalPrice = total;
            return data.totalPrice;
        },
        getProductById: function(id) {
            let product = null;
            data.products.forEach(prd => {
                if (prd.id == id) {
                    product = prd;
                }
            });
            return product;
        },
        setCurrentProduct: function(prd) {
            data.selectedProduct = prd;
        },
        getCurrentProduct: function() {
            return data.selectedProduct;
        }

    }

})();

//  UI Controller
const UIController = (function() {

    const Selectors = {
        productList: "#item-list",
        addButton: ".addBtn",
        updateButton: ".updateBtn",
        cancelButton: ".cancelBtn",
        deleteButton: ".deleteBtn",
        productName: "#productName",
        productPrice: "#productPrice",
        productCard: "#productCard",
        totalTl: "#totaltl",
        totalDolar: "#totaldolar"
    }

    return {
        createProductList: function(products) {
            let html = "";

            products.forEach(prd => {
                html += `
                    <tr>
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price}$</td>
                        <td class="text-right">
                            <i class="far fa-edit edit-product"></i>
                        </td>
                    </tr>
                `;
            });

            document.querySelector(Selectors.productList).innerHTML = html;
        },

        getSelectors: function() {
            return Selectors;
        },

        addProduct: function(prd) {
            document.querySelector(Selectors.productCard).style.display = "block";
            item = `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}$</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>
        `;
            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearInputs: function() {
            document.querySelector(Selectors.productName).value = "";
            document.querySelector(Selectors.productPrice).value = "";
        },
        hideCard: function() {
            document.querySelector(Selectors.productCard).style.display = "none";
        },
        showTotal: function(total) {
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTl).textContent = total * 7, 5 + "$";
        },
        addProductToForm: function() {
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },
        addingState: function() {
            UIController.clearInputs();
            document.querySelector(Selectors.addButton).style.display = "inline";
            document.querySelector(Selectors.cancelButton).style.display = "none";
            document.querySelector(Selectors.updateButton).style.display = "none";
            document.querySelector(Selectors.deleteButton).style.display = "none";
        },
        editState: function(tr) {

            var parent = tr.parentNode;

            for (let i = 0; i < parent.children.lenght; i++) {
                parent.children[i].classList.remove("bg-warning");
            }

            tr.classList.add("bg-warning");
            document.querySelector(Selectors.addButton).style.display = "none";
            document.querySelector(Selectors.cancelButton).style.display = "inline";
            document.querySelector(Selectors.updateButton).style.display = "inline";
            document.querySelector(Selectors.deleteButton).style.display = "inline";
        }
    }

})();

//  App Controller
const App = (function(ProductCtrl, UICtrl) {

    const UISelectors = UICtrl.getSelectors();

    const loadEventListeners = function() {

        //  Add Product
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit)

        //  Edit Product
        document.querySelector(UISelectors.productList).addEventListener("click", productEditSubmit)

    }

    const productAddSubmit = function(e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== "" && productPrice !== "") {
            //  Add Product
            const newProduct = ProductCtrl.AddProduct(productName, productPrice);

            //  Add Product to List
            UICtrl.addProduct(newProduct);

            //  Get Total
            const total = ProductCtrl.getTotal();

            //  Show Total
            UICtrl.showTotal(total);

            //  Clear Inputs
            UICtrl.clearInputs();
        }


        e.preventDefault();
    }

    const productEditSubmit = function(e) {

        if (e.target.classList.contains('edit-product')) {
            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            const product = ProductCtrl.getProductById(id);

            ProductCtrl.setCurrentProduct(product);

            UICtrl.addProductToForm();

            UICtrl.editState(e.target.parentNode.parentNode);
        }

        e.preventDefault();
    }

    return {
        init: function() {
            console.log("Starting App...")
            UICtrl.addingState();
            const products = ProductCtrl.getProducts();

            if (products.length == 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }

            loadEventListeners();
        }
    }

})(ProductController, UIController);


App.init();