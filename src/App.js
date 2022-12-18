import './App.css';
import { useState } from 'react';
import sneakerData from './assets/sneaker-data.json';
import { SneakerItem } from './components/SneakerItem.js'
import { DropDown } from './components/DropDown.js'
import { CheckedBox } from './components/CheckedBox.js'
import { filter } from 'dom-helpers';
import { SortButton } from './components/SortButton.js'


function App() {

  //const [type, setType] = useState("All");
  const [cart, setCart] = useState({});
  //const [itemsList, setItemsList] = useState(sneakerData);
  const [price, setPrice] = useState(0);

  const [priceFilters, setPriceFilters] = useState([]);
  const [yearFilters, setYearFilters] = useState([]);
  const [sort, setSort] = useState(false);
  //const [sneakers, setSneaker] = useState(sneakerData);
  const updateCart = (id) => {
    let newCart = cart;
    if (newCart[id]) {
      newCart[id] += 1;
    } else {
      newCart[id] = 1;
    }
    setCart({ ...newCart });
  }

  //filter by price
  function priceFilter(minPrice, maxPrice) {
    setPriceFilters([...priceFilters, [minPrice, maxPrice]])
  }

  const removePriceFilter = (minPrice, maxPrice) => {
    setPriceFilters(priceFilters.filter(priceRange =>
      !(priceRange[0] === minPrice && priceRange[1] === maxPrice)));
  }

  //filter by release year
  function yearFilter(year) {
    setYearFilters([...yearFilters, year])
  }

  const removeYearFilter = year => {
    setYearFilters(yearFilters.filter(yearFilter => yearFilter !== year));
  }


  const filterByPrice = item => {
    if (priceFilters.length === 0) return true;

    let isIn = false;
    // priceFilters [[0, 100], [200, 500]]
    priceFilters.forEach(priceRange => {
      // price range [0, 100] or [200, 500]
      const [minPrice, maxPrice] = priceRange;
      isIn = isIn | item.price >= minPrice && item.price <= maxPrice
    });
    return isIn;
  }

  const filterByYear = item => {
    if (yearFilters.length === 0) return true;
    // [1, 2, 3].includes(2) -> return true
    return yearFilters.includes(item.year);
  }

  function priceSort() {
    computedFilteredArray = computedFilteredArray.sort((a, b) => sortFunction(a, b));
    //setSneaker([...sneakers].sort();
    console.log(computedFilteredArray);
  }

  const randomSort = (a, b) => {
    return -1;
  }
  function sortChange(a, b) {
    if (sort) {
      return sortFunction(a, b);
    } else {
      return randomSort(a, b);
    }
  }

  const sortFunction = (a, b) => {
    // if (sort === null) {
    //   return true;
    // } else {
    //   return sort
    // }
    return a.price - b.price
  }
  // handling the computed array
  let computedFilteredArray = sneakerData.filter(item => filterByPrice(item)).filter(item => filterByYear(item));
  computedFilteredArray.sort((a, b) => sortChange(a, b))


  //<DropDown></DropDown>

  return (
    <div className="App">
      <div class="appHeader">
        <h1 id="appTitle1">AIR JORDAN</h1>
        <h1 id="appTitle2">OUTFITTERS</h1>
      </div>

      <div id="main_content">
        <div id="filter_box">
          <CheckedBox priceFilter={priceFilter} yearFilter={yearFilter} removePriceFilter={removePriceFilter} removeYearFilter={removeYearFilter}></CheckedBox>
          <h3 class="filterHeader">Sort</h3>
          <SortButton sortFunction={() => setSort(!sort)}></SortButton>
        </div>
        <div id="shoe_list">
          {computedFilteredArray.map((item, index) => {
            return (<SneakerItem key={index} updateCart={updateCart} item={item} index={index} price={price} setPrice={setPrice} />)
          })}
        </div>

        <div id="cart">
          <h2>Cart</h2>
          <div class="row">
            <p class="cart_column_header" id="cart_name_header">Item</p>
            <p class="cart_column_header">Quantity</p>
            <p class="cart_column_header">Price</p>
          </div>
          <div id="cart_items">
            {Object.keys(cart).map((key) => {
              return (
                <div class="cart_text cart_item">
                  <p class="cart_item_name">{sneakerData[key].name}</p>
                  <p>{cart[key]}</p>
                  <p>${sneakerData[key].price}</p>
                </div>
              )
            })}
          </div>
          <div class="row">
            <h3 class="cart_text_bold">Total</h3>
            <h3 class="cart_text_bold">${price}</h3>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
