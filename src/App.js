import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Modal from './components/Modal/Modal.js';
import ClickCard from './components/ClickCard/ClickCard.js';
import MessageCard from './components/MessageCard/MessageCard.js';
import './index.css';
import cards from './cards.json';
import Footer from "./components/Footer";

class App extends Component {
  state = {
      cards: cards,
      score: 0,
      topScore: 0,
      clickedCards: [],
      MessageCardText: "Choose a Character"
    }

  characterChosen = (id) => {
    const [pageBody] = document.getElementsByTagName('body');

    if (this.state.clickedCards.includes(id)) {
      this.setState({score: 0, clickedCards: []})

      pageBody.classList.add('shakeWrapper')
      this.setState({MessageCardText: 'You Lose! You Chose that Character already!'})
      setTimeout(() => {
        pageBody.classList.remove('shakeWrapper');
      }, 500);
      setTimeout(() => {
          this.setState({MessageCardText: ""})
      }, 1800)

    } else {
      this.setState({clickedCards: [...this.state.clickedCards, id]})
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})

      } 
      if (this.state.score === 11) {
          this.setState({MessageCardText: 'You Won! Play again?'})
        this.setState({score: 0, clickedCards: [], cards: cards})
        setTimeout(() => {
            this.setState({MessageCardText: ''})
        }, 1800)
      } 
    }
  }

  //Shuffle The Characters
  reArrangeCards = (array) => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({cards:cards});
  }

  renderCards = (array) => {
    return this.state.cards.map(card => (
      <section className='col s4 m3 l3' key={card.id} id={card.id}>
        <ClickCard
          name={card.name} 
          image={card.image} 
          reArrangeCards={() => {this.reArrangeCards(this.state.cards)}}
          characterChosen={() => {this.characterChosen(card.id)}}/>
      </section>
      )
    )
  }


  render() {
    return (
      <div className="container-fluid">
        <Navbar score={this.state.score} topScore={this.state.topScore}/>
        <Modal />
        <br />
        <div className="container row cardWrapper">
          {this.renderCards(this.state.cards)}
            </div>
        <MessageCard text={this.state.MessageCardText}/>
        <Footer/>
      </div>
    );
  }
}

export default App;




