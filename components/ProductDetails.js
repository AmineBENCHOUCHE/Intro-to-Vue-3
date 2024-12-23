app.component('product-details', {
    props:{
        details: [
            {
                type: Array,
                required: true
            }
        ]
    }, 
    template:
    /*html*/
    `
    <ul>
    <p>Product Details</p>
    <li :key='id' v-for="detail in details">{{detail}}</li>
    </ul>
    `
})