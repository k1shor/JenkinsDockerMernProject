// export const API = import.meta.env.VITE_APP_API
export const API = `http://localhost:5000/api`

export const PRICES = [
    {
        id: 0,
        title: "All",
        value: []
    },
    {
        id: 1,
        title: "Upto Rs.1000",
        value: [0,1000]
    },
    {
        id: 2,
        title: "Rs.1000 - Rs.10000",
        value: [1001, 10000]
    },
    {
        id: 3,
        title: "Rs.10000 - Rs.50000",
        value: [10001, 50000]
    },
    {
        id: 4,
        title: "Rs.50000 - Rs.100000",
        value: [50001, 100000]
    },
    {
        id: 5,
        title: "Above Rs.100000",
        value: [100001, 9999999999]
    },
]