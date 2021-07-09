export let locations: Locations = {
    data : [
        {
            id: 0,
            name: "Zavino",
            street_address: "3200 Chestnut St",
            city: "Philadelphia",
            state: "PA",
            zip: "19104",
            hours: [
                {
                    day: "monday",
                    value: "Closed"
                },
                {
                    day: "tuesday",
                    value: "10:00 AM - 10:00 PM"
                },
                {
                    day: "wednesday",
                    value: "10:00 AM - 10:00 PM"
                },
                {
                    day: "thursday",
                    value: "10:00 AM - 10:00 PM"
                },
                {
                    day: "friday",
                    value: "10:00 AM - 10:00 PM"
                },
                {
                    day: "saturday",
                    value: "10:00 AM - 10:00 PM"
                },
                {
                    day: "sunday",
                    value: "10:00 AM - 10:00 PM"
                }
            ],
            phone: "(215) 895 - 2750",
            website: "www.zavino.com",
            capacity: 200,
            cuisines: [
                {
                    name: "American",
                    value: 1,
                    selected: false,
                },
                {
                    name: "Asian",
                    value: 2,
                    selected: false,
                },
                {
                    name: "Coffee and Tea",
                    value: 3,
                    selected: false,
                }
            ],
            locationTypes:[
                {
                    name: "Restaurant",
                    value: 1,
                    selected: false
                }
            ],
            menu: [
                {
                    id: 0,
                    name: "meats & cheese",
                    items: [
                        {
                            id: 0,
                            name: "sopressata",
                            desc: "italian | salami, pork, red wine aged",
                            price: 9
                        },
                        {
                            id: 1,
                            name: "prosciutto di parma",
                            desc: "italian | dry cured pork, aged 10-12 months",
                            price: 9
                        },
                        {
                            id: 2,
                            name: "bresaola",
                            desc: "italian | cured beef tenderloin, aged 60 days",
                            price: 10
                        },
                        {
                            id: 3,
                            name: "moody blue",
                            desc: "wisconsin | cows milk, smoked, well balanced, crumbly blue",
                            price: 9
                        },
                        {
                            id: 4,
                            name: "baby jesus",
                            desc: "new york | salami, dry aged 90 days, seasoned",
                            price: 10
                        },
                        {
                            id: 5,
                            name: "dumbarton",
                            desc: "wisconsin | cows milk, english style cheddar, hint of blue cheese",
                            price: 9
                        },
                        {
                            id: 6,
                            name: "mahon reserva",
                            desc: "spain | cows milk, semi-hard, aged 8 months, mild, nutty",
                            price: 9
                        },
                        {
                            id: 7,
                            name: "tasting board",
                            desc: "chef's selection of meats and cheeses",
                            price: 23
                        }
                    ]
                
                },
                {
                    id: 1,
                    name: "salads",
                    items:[
                        {
                            id: 0,
                            name: "roasted beet",
                            desc: "kale, goat cheese, candied pecans red beet and port reduction",
                            price: 12
                        }
                    ]
                }
            ]
        },
        {
            id: 1,
            name: "Zavino",
            street_address: "2300 Chestnut St",
            city: "Philadelphia",
            state: "PA",
            zip: "19104",
            hours: [
                {
                    day: "monday",
                    value: "Closed"
                },
                {
                    day: "tuesday",
                    value: "10:00 AM - 10:00 PM"
                },
                {
                    day: "wednesday",
                    value: "10:00 AM - 10:00 PM"
                },
                {
                    day: "thursday",
                    value: "10:00 AM - 10:00 PM"
                },
                {
                    day: "friday",
                    value: "10:00 AM - 10:00 PM"
                },
                {
                    day: "saturday",
                    value: "10:00 AM - 10:00 PM"
                },
                {
                    day: "sunday",
                    value: "10:00 AM - 10:00 PM"
                }
            ],
            phone: "(215) 899 - 2750",
            website: "www.zavino.com",
            capacity: 300,
            cuisines: [
                {
                    name: "American",
                    value: 1,
                    selected: false,
                },
                {
                    name: "Coffee and Tea",
                    value: 3,
                    selected: false,
                },
                {
                    name: "Indian",
                    value: 7,
                    selected: false,
                }
            ],
            locationTypes:[
                {
                    name: "Restaurant",
                    value: 1,
                    selected: false
                }
            ],
            menu: [
                {
                    id: 0,
                    name: "meats & cheese",
                    items: [
                        {
                            id: 0,
                            name: "sopressata",
                            desc: "italian | salami, pork, red wine aged",
                            price: 9
                        },
                        {
                            id: 1,
                            name: "prosciutto di parma",
                            desc: "italian | dry cured pork, aged 10-12 months",
                            price: 9
                        },
                        {
                            id: 2,
                            name: "bresaola",
                            desc: "italian | cured beef tenderloin, aged 60 days",
                            price: 10
                        },
                        {
                            id: 3,
                            name: "moody blue",
                            desc: "wisconsin | cows milk, smoked, well balanced, crumbly blue",
                            price: 9
                        },
                        {
                            id: 4,
                            name: "baby jesus",
                            desc: "new york | salami, dry aged 90 days, seasoned",
                            price: 10
                        },
                        {
                            id: 5,
                            name: "dumbarton",
                            desc: "wisconsin | cows milk, english style cheddar, hint of blue cheese",
                            price: 9
                        },
                        {
                            id: 6,
                            name: "mahon reserva",
                            desc: "spain | cows milk, semi-hard, aged 8 months, mild, nutty",
                            price: 9
                        },
                        {
                            id: 7,
                            name: "tasting board",
                            desc: "chef's selection of meats and cheeses",
                            price: 23
                        }
                    ]
                
                },
                {
                    id: 1,
                    name: "salads",
                    items:[
                        {
                            id: 0,
                            name: "roasted beet",
                            desc: "kale, goat cheese, candied pecans red beet and port reduction",
                            price: 12
                        }
                    ]
                }
            ]
        }
    ]
}

export interface Locations{
    data: Location[]
}

export interface Location{
    id: number,
    name: string,
    street_address: string,
    city: string,
    state: string,
    zip: string,
    hours: Hour[],
    phone: string,
    website: string,
    capacity: number,
    cuisines: Cuisine[],
    locationTypes: LocationType[],
    menu: Category[]
}

interface Hour{
    day: string,
    value: string
}

export interface Cuisine{
    name: string,
    value: number,
    selected: boolean
}

export interface LocationType{
    name: string,
    value: number,
    selected: boolean
}

interface Category{
    id: number,
    name: string,
    items: Item[]
  }
  
interface Item{
    id: number,
    name: string,
    desc: string,
    price: number
  }
  