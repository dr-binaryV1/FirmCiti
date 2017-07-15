import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Appointment = (props) => {
    function renderField(field){
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

    return (
        <div className="sidebar-info-appointments">
            <h4>Make Appointment</h4>
            <Field
                label = "Name"
                name = "customerName"
                type = "text"
                component = {renderField} />

            <div className="datetime-contaner">
                <Field
                    label = "Date"
                    name = "date"
                    type = "date"
                    component = {renderField} />

                <Field
                    label = "Time"
                    name = "time"
                    type = "number"
                    component = {renderField} />
            </div>

            <Field
                label = "Reason"
                name = "reason"
                type = "text"
                component = {renderField} />

            <button className="btn btn-primary btn-sm">Make Appointment</button>
        </div>
    );
}

export default Appointment;
