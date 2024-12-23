const app = Vue.createApp({
	data() {
		return {
			cart: [],
            premium: true,
            details: ["50% cotton", "30% wool", "20% polyester"],
			/* COMMENT
				// product: "Socks",
				// brand: "Nike",
				// // inStock: false,
				// inventory: 100,
				// onSale: true,
				// selectedVariant: 0,
				// // image: './assets/images/socks_green.jpg',
				// url: "https://www.vuemastery.com/",
				// details: ["50% cotton", "30% wool", "20% polyester"],
				// variants: [
				// 	{
				// 		id: 2234,
				// 		color: "green",
				// 		image: "./assets/images/socks_green.jpg",
				// 		quantity: 50,
				// 	},
				// 	{
				// 		id: 2235,
				// 		color: "blue",
				// 		image: "./assets/images/socks_blue.jpg",
				// 		quantity: 0,
				// 	},
				// ],
				// sizes: ["S", "M", "L", "XL"],
            	// onSale: true,
				*/
		};
	},
	methods: {

        updateCart(id){
            this.cart.push(id)
        }

		// addToCart() {
		// 	this.cart += 1;
		// },
		// decrementCart() {
		// 	this.cart -= 1;
		// },
		// updateVariant(index) {
		// 	this.selectedVariant = index;
		// 	// console.log(index);
		// },
	},
	// computed: {
	// 	title() {
	// 		return this.brand + " " + this.product;
	// 	},
    //     image(){
    //         return this.variants[this.selectedVariant].image;
    //     },
    //     inStock(){
    //         return this.variants[this.selectedVariant].quantity;
    //     },
    //     sale(){
    //         if(this.onSale){
    //             return this.brand + this.product + " are on sale!";
    //         }
    //     }

	// },
});
