import React from 'react';
import Button from './components/Button';
import Product from './components/Product'
import Tile from "./components/Tile";

import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';

import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

import './App.css';




function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>

        <nav>
            <Button disabled={false}>
                to the collection
            </Button>

            <Button disabled={false}>
                shop all bags
            </Button>

            <Button disabled={true}>
                pre-orders
            </Button>
        </nav>

          <main>
              <Product
                spanText="Best seller"
                image={bag1}
                name="The handy bag"
                price="&euro;400"
              />
              <Product
                  spanText="Best seller"
                  image={bag2}
                  name="The stylish bag"
                  price="&euro;250"
              />
              <Product
                  spanText="New collection"
                  image={bag3}
                  name="The simple bag"
                  price="&euro;300"
              />
              <Product
                  spanText="New collection"
                  image={bag4}
                  name="The trendy bag"
                  price="&euro;150"
              />
          </main>

          <footer>
              <Tile
                  title="The Brand"
                  p1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur hic magni nulla placeat suscipit tempore? Cumque in quibusdam quisquam."
                  p2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae ea eos impedit incidunt nemo possimus quia reprehenderit saepe voluptatibus?"
              />

              <Tile image={brand} />

              <Tile image={our_story} />

              <Tile
                  title="The Brand"
                  p1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur hic magni nulla placeat suscipit tempore? Cumque in quibusdam quisquam."
                  p2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores at debitis earum hic obcaecati possimus quos reprehenderit vitae voluptate."
              />
          </footer>
      </>

  );
}

export default App;



