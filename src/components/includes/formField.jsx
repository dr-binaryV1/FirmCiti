import React from 'react';

const FormField = (props) => {
    const { meta: { touched, error } } = props.field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return(
            <div className = { className }>
                <label>{ props.field.label }</label>
                <input
                    className="form-control"
                    type={ props.field.type }
                    { ...props.field.input } />
                <div className="text-help">
                    { touched ? error : '' }
                </div>
            </div>
        );
}

export default FormField;