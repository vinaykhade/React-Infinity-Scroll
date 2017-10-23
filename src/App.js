import React, { Component } from "react";
import './assets/stylesheets/main.scss';
import Waypoint from 'react-waypoint';

class App extends Component {
  
  constructor(props) {
    super(props);
    var initialItems = [
      'http://lorempixel.com/output/cats-q-c-640-480-9.jpg',
      'http://lorempixel.com/output/cats-q-c-640-480-10.jpg',
      'http://lorempixel.com/output/technics-q-c-640-480-10.jpg',
    ];

    this.state = {
      items: initialItems,
      isLoading: false,
      makeHeightAuto: false,
    }
  }

  toggleParentContainerClass() {
    this.setState({ makeHeightAuto: !this.state.makeHeightAuto });
  }

  _renderItems() {
    return this.state.items.map(function(imageUrl, index) {
      return (
        <div key={index} className="scroll-data-block">
          <p>Image Number {index+1} of Cats and Dogs</p>
          <div id={index+'read'} className="collapse">
            <img
              src={imageUrl}
              alt="CATS AND ROBOTS... "
              className="img-responsive" />
          </div>
          <button
            data-toggle="collapse"
            data-target={"#"+index+'read'}
            className="read-more--btn"
            >Read More</button>
        </div>

      );
    });
  }

  _generateItem() {
    var currentIndex = 0;
    var chooseCat = Math.floor(Math.random() * 2);
    var ind = (currentIndex % 10) + 1;
    var newImage = (chooseCat) ?
      'http://lorempixel.com/output/cats-q-c-640-480-' + ind + '.jpg':
      'http://lorempixel.com/output/technics-q-c-640-480-' + ind + '.jpg';
    currentIndex++;
    return newImage;
  }

  _loadMoreItems() {
    var itemsToAdd = 3;
    var secondsToWait = 2;
    this.setState({ isLoading: true });
    // fake an async. ajax call with setTimeout
    window.setTimeout(function() {
      // add data
      var currentItems = this.state.items;
      for (var i = 0; i < itemsToAdd; i++) {
        currentItems.push(this._generateItem());
      }
      this.setState({
        items: currentItems,
        isLoading: false,
      });
    }.bind(this), secondsToWait * 1000);
  }

  _renderWaypoint() {
    if (!this.state.isLoading) {
      return (
        <Waypoint
          onEnter={this._loadMoreItems.bind(this)}
          threshold={2.0}
        />
      );
    }
  }


  render() {
    const { items } = this.state;
    return (
      <div>
        <h1 className="text-center">Innoplexus</h1>
        <p className="text-center">
          Items Loaded: {items.length}
        </p>
        <div className="infite-scroll--list">

          {this._renderItems()}
          <div>
            {this._renderWaypoint()}
            Loading more items…
          </div>
          <p className="infinite-scroll-example__arrow" />
        </div>
      </div>

    );
  }
}

export default App;
