import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  renderQuoteCards() {
    return this.props.quotes.quotes.map( quote => {
      return <QuoteCard
        key={quote.id}
        quote={quote}
        removeQuote={this.props.removeQuote}
        upVoteQuote={this.props.upVoteQuote}
        downVoteQuote={this.props.downVoteQuote}
      /> 
    })
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuoteCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {quotes: state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuote: (quote) => dispatch({type: "ADD_QUOTE", payload: quote}),
    removeQuote: (quote) => dispatch({type: "REMOVE_QUOTE", payload: quote}),
    upVoteQuote: (quote) => dispatch({type: "UPVOTE_QUOTE", payload: quote}),
    downVoteQuote: (quote) => dispatch({type: "DOWNVOTE_QUOTE", payload: quote})
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
