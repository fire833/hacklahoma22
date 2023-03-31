import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Inbox } from './features/inbox/Inbox';
import { MailView } from './features/MailView/MailView';
import { MailStatusBar } from './features/MailStatusBar/MailStatusBar';

function App() {
  return (
    <div className="App">
      <MailStatusBar></MailStatusBar>
      <Inbox></Inbox>
      <MailView></MailView>
      </div>
  );
}

export default App;
