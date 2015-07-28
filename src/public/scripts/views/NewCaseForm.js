import React from 'react/addons';
import ParseLib from 'parse';
import ParseReact from 'parse-react';

let Parse = ParseLib.Parse;

var NewCaseForm = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState() {
    return {
      fullName: undefined,
      description: undefined,
      email: undefined,
      tel: undefined
    };
  },

  onSubmitClick() {
    var creator = ParseReact.Mutation.Create('Case', this.state);
    creator.dispatch();
  },

  render() {
    return (<form className="pure-form pure-form-stacked">
        <fieldset>
          <legend>Twoja sprawa</legend>
          <textarea className="pure-input-1-2"
                    placeholder="Opis sprawy..."
                    valueLink={this.linkState('description')}></textarea>
          <label htmlFor="full-name">Imię i Nazwisko</label>
          <input id="full-name"
                 type="text"
                 className="pure-input-1-2"
                 placeholder="Jan Kowalski"
                 valueLink={this.linkState('fullName')}></input>
          <label htmlFor="email">Imię i Nazwisko</label>
          <input id="email"
                 type="email"
                 className="pure-input-1-2"
                 placeholder="jan.kowalski@adres.com"
                 valueLink={this.linkState('email')}></input>
          <label htmlFor="tel">Numer telefonu</label>
          <input id="tel"
                 type="tel"
                 className="pure-input-1-2"
                 placeholder="555 252 525"
                 valueLink={this.linkState('tel')}></input>
        </fieldset>
        <button type="button" className="pure-button pure-input-1-2 pure-button-primary" onClick={this.onSubmitClick}>Sign in</button>
      </form>);
  }
});

export default NewCaseForm;
