import React from 'react';
import ParseLib from 'parse';
import NewCaseForm from './views/NewCaseForm';

ParseLib.Parse.initialize("ntuSDHZuuEtqaZIlDE8mC4xID55wpxBP9MjEWrTl", "AUgLhW4CoXHR7Olx1DebqlvkglWYlh6vyXc7lE9W");

React.render(<NewCaseForm />, document.getElementById('new-case'));
