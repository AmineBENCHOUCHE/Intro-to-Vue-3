app.component("product-display", {
	props: {
		premium: {
			type: Boolean,
			required: true,
		},
	},
	template:
		/*html*/
		`<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <!-- image goes here -->
                    <img :src="image" alt="A pair of warm, fuzzy socks" :class="{ 'out-of-stock-img': !inStock }" />
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="onSale">{{sale}}</p>
                    <p v-if="inStock">In stock</p>
                    <p v-else>Out of stock</p>

                    <p>Shipping: {{shipping}}</p>
                    <!-- <p v-show="inStock">In stock</p> -->
                    <!-- <p v-if="inventory > 10">In stock</p>
                    <p v-else-if="inventory <= 10 && inventory >0">Almost sold out!</p> -->
                
                    <div
                        v-for="(variant, index) in variants"
                        :key="variant.id"
                        @mouseover="updateVariant(index)"
                        class="color-circle"
                        :style="{backgroundColor: variant.color, cursor: 'pointer'}"
                    >
                        <!-- {{variant.color}} -->
                    </div>
					<div>
						<button class="button" v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton : !inStock}">Add to Cart</button>
						
						<!-- <button class="button" v-on:click="cart+=1">Add to Cart</button> -->
						<!-- Challenge -->
						<!-- <button class="button" @click="decrementCart" v-show="cart.lenght">Remove</button> -->
						<product-details :details="details"></product-details>
					</div>

                    <!-- Challenge -->
                    <!-- <div v-for="size in sizes">{{size}}</div>-->

                    <!-- Challenge  -->
                    <!-- <p v-if="onSale">On sale</p> -->

                    <!-- Challenge -->
                    <!-- <a :href="url">Vue Mastery</a> -->
                </div>
            </div>
			<review-list :reviews="reviews" v-if="reviews.length"></review-list>
			<review-form @review-submitted="addReview"></review-form>
        </div>
        `,
	data() {
		return {
			// cart: 0,
			product: "Socks",
			brand: "Vue Mastery",
			// inStock: false,
			inventory: 100,
			onSale: true,
			selectedVariant: 0,
			// image: './assets/images/socks_green.jpg',
			url: "https://www.vuemastery.com/",
			details: ["50% cotton", "30% wool", "20% polyester"],
			variants: [
				{
					id: 2234,
					color: "green",
					image: "./assets/images/socks_green.jpg",
					quantity: 50,
				},
				{
					id: 2235,
					color: "blue",
					image: "./assets/images/socks_blue.jpg",
					quantity: 0,
				},
			],
			sizes: ["S", "M", "L", "XL"],
			onSale: true,
			reviews: [],
		};
	},
	methods: {
		addToCart() {
			this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
		},
		// decrementCart() {
		// 	this.$emit("decrement-cart", );
		// },
		updateVariant(index) {
			this.selectedVariant = index;
			// console.log(index);
		},
		addReview(review) {
			this.reviews.push(review);
		},
	},
	computed: {
		title() {
			return this.brand + " " + this.product;
		},
		image() {
			return this.variants[this.selectedVariant].image;
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity;
		},
		sale() {
			if (this.onSale) {
				return this.brand + this.product + " are on sale!";
			}
		},
		shipping() {
			if (this.premium) {
				return "Free";
			}
			return 2.99;
		},
	},
});
