import React from 'react';
import ParseLib from 'parse';
import ParseReact from 'parse-react';

let Parse = ParseLib.Parse;

console.log('Parse', Parse);

var NewCaseForm = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions

  observe: function() {
    // Subscribe to all Comment objects, ordered by creation date
    // The results will be available at this.data.comments
    return {
      comments: (new Parse.Query('Comment')).ascending('createdAt')
    };
  },

  render: function() {
    // Render the text of each comment as a list item
    return (<form className="pure-form pure-form-stacked">
        <fieldset>
          <legend>Twoja sprawa</legend>
          <textarea className="pure-input-1-2" placeholder="Opis sprawy..."></textarea>
          <label htmlFor="full-name">Imię i Nazwisko</label>
          <input id="full-name" type="text" className="pure-input-1-2" placeholder="Jan Kowalski"></input>
          <label htmlFor="email">Imię i Nazwisko</label>
          <input id="email" type="email" className="pure-input-1-2" placeholder="jan.kowalski@adres.com"></input>
          <label htmlFor="tel">Numer telefonu</label>
          <input id="tel" type="tel" className="pure-input-1-2" placeholder="555 252 525"></input>
        </fieldset>
        <button type="submit" className="pure-button pure-input-1-2 pure-button-primary">Sign in</button>
      </form>);
  }
});

export default NewCaseForm;
