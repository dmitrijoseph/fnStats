import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import {withRouter} from 'react-router-dom'

const styles = theme => ({
  
  container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    justify: 'center',
    width: 400,
    },
  })

  class TextFields extends React.Component {

    state ={
        query: ''
    }
    handleChange = event => {
        this.setState({query: event.target.value})
    }
    handleSubmit = e =>{
      e.preventDefault()
      this.props.history.push('/'+ this.state.query)
    }
  
    render() {
      const { classes } = this.props;
  
      return (
        <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            id="with-placeholder"
            label="Enter Username"
            placeholder="Ninja"
            onChange={this.handleChange} 
            className={classes.textField}
            margin="normal"
          />
        </form>
      )
    }
  }
  
  TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  }
  
  export default withRouter(withStyles(styles)(TextFields))