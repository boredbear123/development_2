import '../App.css';

export function CheckedBox({ priceFilter: applyPriceFilter, yearFilter: applyYearFilter, removePriceFilter, removeYearFilter }) {
    /*
    const onChange = event => {
        console.log(event.target.value, event.target.checked);
        // update states to change which items are shown
    }
    */

    const handlePriceFilterChange = (event, min, max) => {
        if (event.target.checked) {
            applyPriceFilter(min, max)
        } else {
            removePriceFilter(min, max)
        }
    }

    const handleYearFilterChange = (event, year) => {
        if (event.target.checked == true) {
            applyYearFilter(year)
        } else {
            removeYearFilter(year)
        }
    }


    // {() => { priceFilter(0, 200) }}
    // {() => { yearFilter(1985) }}

    return (
        <div id="filters">
            <h3 class="filterHeader">Price range</h3>
            <div id="priceFilters">
                <label class="labels">
                    <input type="checkbox" onChange={event => handlePriceFilterChange(event, 0, 500)} />
                    $0 - $500
                </label>
                <label class="labels">
                    <input type="checkbox" onChange={event => handlePriceFilterChange(event, 500, 1000)} />
                    $500 - $1000
                </label>
                <label class="labels">
                    <input type="checkbox" onChange={event => handlePriceFilterChange(event, 1000, 99999999999999999)} />
                    $1000+
                </label>
            </div>

            <h3 class="filterHeader">Release year</h3>
            <label class="labels">
                <input type="checkbox" onChange={event => handleYearFilterChange(event, 1985)} />
                1985
            </label>
            <label class="labels">
                <input type="checkbox" onChange={event => handleYearFilterChange(event, 2018)} />
                2018
            </label>
            <label class="labels">
                <input type="checkbox" onChange={event => handleYearFilterChange(event, 2019)} />
                2019
            </label>
            <label class="labels">
                <input type="checkbox" onChange={event => handleYearFilterChange(event, 2020)} />
                2020
            </label>
            <label class="labels">
                <input type="checkbox" onChange={event => handleYearFilterChange(event, 2021)} />
                2021
            </label>
            <label class="labels">
                <input type="checkbox" onChange={event => handleYearFilterChange(event, 2022)} />
                2022
            </label>
        </div>

    );
}