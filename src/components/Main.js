import React, { useState } from 'react'
import './../App.css';
import { useSelector, useDispatch } from "react-redux";

function App() {



    const [categories, setCategories] = useState([
        {
            id: 1,
            value: "Country name",
        },
        {
            id: 2,
            value: "Distance",
        },
        {
            id: 3,
            value: "Amount",
        },
    ])

    const [secondCategories, setSecondCategories] = useState([
        {
            id: 1,
            value: "Равно",
        },
        {
            id: 2,
            value: "Содержит",
        },
        {
            id: 3,
            value: "Больше",
        },
        {
            id: 4,
            value: "Меньше",
        },
    ])

    const pageNumbers = []

    const countries = useSelector(state => state.countries)

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(3)

    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

    for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const [categoryValue, setCategoryValue] = useState(`${categories[0].value}`)

    const [secondCategoryValue, setSecondCategoryValue] = useState(`${secondCategories[0].value}`)

    const [inputValue, setInputValue] = useState("")

    const handleLiClick = (v) => {
        setInputValue("")
        setCategoryValue(v.value)
    }

    const handleSecondLiClick = (v) => {
        setInputValue("")
        setSecondCategoryValue(v.value)
    }

    return (
        <div>
            <div className='filtration_div'>
                <div className='input_div'>
                    <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
                    </input>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: "10px" }} class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            {categoryValue}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdown">
                            {
                                categories.map((v, i) => {
                                    return (
                                        <li key={i} onClick={handleLiClick.bind(this, v)}><a class="dropdown-item" href="#">{v.value}</a></li>
                                    )
                                })

                            }
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            {secondCategoryValue}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdown">
                            {
                                secondCategories.map((v, i) => {
                                    return (
                                        <li key={i} onClick={handleSecondLiClick.bind(this, v)}><a class="dropdown-item" href="#">{v.value}</a></li>
                                    )

                                })

                            }
                        </ul>
                    </div>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Country name</th>
                        <th scope="col">Distance</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inputValue ?
                            countries.map((country, i) => {
                                if (categoryValue == "Country name" && secondCategoryValue == "Содержит" && country.countryName.toLowerCase().includes(inputValue.toLocaleLowerCase().trim()) ||
                                    categoryValue == "Distance" && secondCategoryValue == "Содержит" && country.distance.toString().includes(inputValue) ||
                                    categoryValue == "Amount" && secondCategoryValue == "Содержит" && country.amount.toString().includes(inputValue) ||
                                    categoryValue == "Distance" && secondCategoryValue == "Равно" && country.distance.toString() == inputValue ||
                                    categoryValue == "Amount" && secondCategoryValue == "Равно" && country.amount.toString() == inputValue ||
                                    categoryValue == "Distance" && secondCategoryValue == "Больше" && country.distance >= inputValue ||
                                    categoryValue == "Amount" && secondCategoryValue == "Больше" && country.amount >= inputValue ||
                                      categoryValue == "Distance" && secondCategoryValue == "Меньше" && country.distance <= inputValue ||
                                    categoryValue == "Amount" && secondCategoryValue == "Меньше" && country.amount <= inputValue ) {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{country.date}</th>
                                            <td>{country.countryName}</td>
                                            <td>{country.distance}</td>
                                            <td>{country.amount}</td>
                                        </tr>
                                    )


                                }
                            }) :
                            currentCountry.map((country, i) => {
                                {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{country.date}</th>
                                            <td>{country.countryName}</td>
                                            <td>{country.distance}</td>
                                            <td>{country.amount}</td>
                                        </tr>
                                    )


                                }
                            })

                    }

                </tbody>
            </table>
            <div className='pagination_div'>
                <ul className='pagination'>
                    {
                        inputValue ? null :
                            pageNumbers.map((number) => {
                                return (
                                    <li className='page-item' key={number} onClick={() => paginate(number)}>
                                        <a href="!#" className="page-link">{number}</a>
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>
        </div >
    );
}

export default App;
