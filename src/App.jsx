import React from 'react';
import './App.css';
import { Input, Header, Icon, Button, Segment } from 'semantic-ui-react'

export default class App extends React.Component {
  state = {
    number: 0,
    message: '',
    color: '',
  }

  onButtonRandom = () => {
    const random = Math.floor(Math.random()*1000000);
    console.log(random);
    this.setState({number: random});
  }

  onInputChange = event => {
    this.setState({number: event.target.value});
    console.log(event.target.value);
  }

  getResult = () => {
    let n = Number(this.state.number);

    let m = 'Is prime number...';
    this.setState({color: 'green'});

    if (n <= 1 || (n > 2 && n%2 === 0)) {
      m = 'Is not prime number...';
      this.setState({color: 'red'});
    }
    
    const max = Math.floor(Math.sqrt(n));

    for (let i=3; i<max+1; i++) {
      if (n%i === 0) {
        m = 'Is not prime number...';
        this.setState({color: 'red'});
        break;
      }
    }

    console.log(n, m);

    this.setState({message: m});
  }

  render() {
    return (
      <div className='App'>
        <Header as='h2'>
          <Icon name='calculator' />
          <Header.Content>
            Prime Number Detector
            <Header.Subheader>Just give me a number and I'll tell you if is a prime number or not</Header.Subheader>
          </Header.Content>
        </Header>
        <Input onChange={this.onInputChange} placeholder={this.state.number} />
        <Button color='black' onClick={this.onButtonRandom}>Random</Button>
        <br />
        <br/>
        <Button onClick={this.getResult}>
          Go...
      </Button>
        <br />
        <br/>
        <Button color={this.state.color}>{this.state.message}</Button>
      </div>
    )
  }
}