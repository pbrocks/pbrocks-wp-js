import React from 'react'
import ReactDOM from 'react-dom'
import validation from 'react-validation-mixin'; //import the mixin
import strategy from 'react-validatorjs-strategy'; //choose a validation strategy
import {
  Icon,
  FormGroup,
  InputGroup,
  FormControl,
  ControlLabel
} from '@sketchpixy/rubix';

export class EmailInput extends React.Component {
  constructor(props) {
    super(props)

    this.validatorTypes = strategy.createInactiveSchema(
      {
        email: 'required|email'
      }
    )

    this.getValidatorData = this.getValidatorData.bind(this)
  }

  getValidatorData() {
    return {
      email: this.email.value,
    }
  }

  activateValidation(e) {
    e.persist()
    strategy.activateRule(this.validatorTypes, e.target.id)
    this.props.handleValidation(e.target.id)(e)
    this.handleChange(e)
  }

  handleChange(e) {
    e.persist()
    var state = {}
    if (this.validatorTypes.activeRules.indexOf('email') != -1) {
      var validationState = this.props.isValid(e.target.id) ? 'success' : 'error'
      state[e.target.id] = {value: e.target.value, validationState: validationState}
    }
    else {
      state[e.target.id] = {value: e.target.value}
    }

    this.setState(state, () => {
      this.props.handleValidation(e.target.id)(e)
    })
  }

  render() {
    return (
      <FormGroup controlId='email' validationState={this.state ? this.state['email'].validationState : undefined}>
        <InputGroup bsSize='large'>
          <InputGroup.Addon>
            <Icon glyph='icon-fontello-mail'/>
          </InputGroup.Addon>
          <FormControl ref={(ref) => this.email = ReactDOM.findDOMNode(ref)} autoFocus type='email' className='border-focus-blue'
                       placeholder='your@email.com' onBlur={this.activateValidation.bind(this)} onChange={this.handleChange.bind(this)}/>
          <FormControl.Feedback />
        </InputGroup>
      </FormGroup>
    )
  }
}

export default validation(strategy)(EmailInput);