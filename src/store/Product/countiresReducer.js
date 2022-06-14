const productState = [
    {
        date:1,
        countryName: 'Armenia',
        distance: 130,
        amount:3000000,
    },
    {
        date:2,
        countryName: 'Argentina',
        distance:130,
        amount:3000000,
    },
    {
        date:3,
        countryName: 'USA',
        distance: 1112,
        amount:3677443,
    },
    {
        date:4,
        countryName: 'Russia',
        distance: 153,
        amount:311223,
    },
    {
        date:5,
        countryName: 'Ukraine',
        distance: 13340,
        amount:12000000,
    },
    {
        date:6,
        countryName: 'China',
        distance: 1230,
        amount:100000000,
    },
    {
        date:7,
        countryName: 'Japan',
        distance: 121230,
        amount:34000000,
    },
    {
        date:8,
        countryName: 'Afganistan',
        distance: 2230,
        amount:2000000,
    },
    {
        date:9,
        countryName: 'Germany',
        distance: 2230,
        amount:3200000,
    },
]



const countiresReducer = (state = productState, action) => {
    switch (action.type) {
        default:
            return state
    }
}



export default countiresReducer