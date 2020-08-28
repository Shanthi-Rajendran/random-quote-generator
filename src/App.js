import React from 'react';
import './App.css';

export default class App extends React.Component {
  render(){
  return (
  <div id="quote-box">
   <div className="container">
    <p id="text">
      <i class="fa fa-quote-left" aria-hidden="true">
        </i> Sometimes when you innovate, you make mistakes.
         It is best to admit them quickly, and get on with improving your other innovations. <i class="fa fa-quote-right">
      </i></p>
    <p id="author">- Steve Jobs</p>
    <div>
     <button id="new-quote">Generate</button>
    </div>
    <a href="twitter.com/intent/tweet" className="tweet" title="Tweet this quote"><i class="fab fa-twitter"></i></a>
   </div>
</div>
  );
}
}


