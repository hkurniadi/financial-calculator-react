import React, { Component } from 'react';

class PV extends Component {
  constructor(props) {
    super(props);
    this.state = {
     calcType: "",
     pmt: "",
     interest: "",
     numofpmt: "",
     pv: "",
     fv:""
    };

    this.handleAnnuityCalculation = this.handleAnnuityCalculation.bind(this);
    this.handleOnetimeCalculation = this.handleOnetimeCalculation.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAnnuityCalculation(event) {
    event.preventDefault();
    let pmt = Number(this.state.pmt);
    let interest = Number(this.state.interest)/100;
    let numofpmt = Number(this.state.numofpmt);
    let pv = Number(this.state.pv);
    pv = pmt*((1/interest)-(1/(interest*Math.pow(1+interest, numofpmt))));
    this.setState({
      pv: pv
    });
  }

  handleOnetimeCalculation(event) {
    event.preventDefault();
    let interest = Number(this.state.interest)/100;
    let fv = Number(this.state.fv);
    let numofperiods = Number(this.state.numofpmt);
    let pv = Number(this.state.pv);
    pv = fv/Math.pow(1+interest, numofperiods);
    this.setState({
      pv: pv
    });
  }

  render() {
    return (
      <div>
        <h1>Present Value Calculator</h1>
        <h2>Annuity</h2>
        <form onSubmit={this.handleAnnuityCalculation}>
          <label>Payment Amount</label>
          <input onChange={this.handleUserInput} value={this.state.pmt} type="text" name="pmt" />
          <label>Interest Rate(%)</label>
          <input onChange={this.handleUserInput} value={this.state.interest} type="text" name="interest" />
          <label>Number of Payments</label>
          <input onChange={this.handleUserInput} value={this.state.numofpmt} type="text" name="numofpmt" />
          <input type="submit" value="Calculate PV" />
        </form>
        <p>Present Value: {this.state.pv}</p>
        <br />
        <hr />
        <h2>One-time PV</h2>
        <form onSubmit={this.handleOnetimeCalculation}>
          <label>Future Value</label>
          <input onChange={this.handleUserInput} value={this.state.fv} type="text" name="fv" />
          <label>Interest Rate(%)</label>
          <input onChange={this.handleUserInput} value={this.state.interest} type="text" name="interest" />
          <label>Number of Periods</label>
          <input onChange={this.handleUserInput} value={this.state.value} type="text" name="numofpmt" />
          <input type="submit" value="Calculate PV" />
        </form>
        <p>Present Value: {this.state.pv}</p>
      </div>
    );
  }
}

export default PV;