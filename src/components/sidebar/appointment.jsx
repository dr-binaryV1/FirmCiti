import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class Appointment extends Component {
    renderField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return(
            <div className = { className }>
                <input
                    className="form-control"
                    placeholder={field.label}
                    type={ field.type }
                    { ...field.input } />
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        );
    }

    onSubmit(){
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div className="sidebar-info-appointments">
                <h5>Make Appointment</h5>
                <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) } >
                    <Field
                        label = "Name"
                        name = "customerName"
                        type = "text"
                        component = {this.renderField} />

                    <div className="datetime-contaner">
                        <Field
                            label = "Date"
                            name = "date"
                            type = "date"
                            component = {this.renderField} />

                        <Field
                            label = "Time"
                            name = "time"
                            type = "number"
                            component = {this.renderField} />
                    </div>

                    <Field
                        label = "Reason"
                        name = "reason"
                        type = "text"
                        component = {this.renderField} />

                    <button type="submit" className="btn btn-primary btn-sm">Make Appointment</button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.customerName){
        errors.customerName = " ";
    }

    if(!values.date){
        errors.date = " ";
    }

    if(!values.time){
        errors.time = " ";
    }

    if(!values.reason){
        errors.reason = " ";
    }

    return errors;
}

export default reduxForm({
    form: 'AppointmentForm',
    validate
}) (connect(null, {  })(Appointment));
