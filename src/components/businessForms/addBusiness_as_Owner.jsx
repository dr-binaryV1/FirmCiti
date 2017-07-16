import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class AddBusinessAsOwner extends Component{
    componentDidMount(){
        
    }

    onSubmit(){
            
    }

    renderField(field){
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        if(field.type !== 'textarea'){
            return(
                <div className = { className }>
                    <label>{ field.label }</label>
                    <input
                        className="form-control"
                        type={ field.type }
                        { ...field.input } />
                    <div className="text-help">
                        { touched ? error : '' }
                    </div>
                </div>
            );
        }

        if(field.type === 'textarea'){
            return(
                <div className = { className }>
                    <label>{ field.label }</label>
                    <textarea
                        className="form-control"
                        rows="2"
                        { ...field.input }></textarea>
                    <div className="text-help">
                        { touched ? error : '' }
                    </div>
                </div>
            );
        }
    }
    
    render(){
        const { handleSubmit } = this.props;

        return(
            <div className="Container animated fadeIn">
                <div className="add-business">
                    <h3>Add your Business</h3>
                    <hr className="line-brightPink-left" />
                    <form onSubmit = { handleSubmit(this.onSubmit.bind(this)) }>
                        <Field
                            label="Name of Business:"
                            name="name"
                            type="text"
                            component={ this.renderField } />

                        <Field
                            label="Description:"
                            name="description"
                            type="textarea"
                            component={ this.renderField } />

                        <Field
                            label="Address:"
                            name="address"
                            type="textarea"
                            component={ this.renderField } />

                        <Field
                            label="Telephone:"
                            name="telephone"
                            type="tel"
                            component={ this.renderField } />

                        <Field
                            label="Open Time:"
                            name="open_time"
                            type="number"
                            component={ this.renderField } />

                        <Field
                            label="Close Time:"
                            name="close_time"
                            type="number"
                            component={ this.renderField } />

                        <button className="btn btn-primary btn-sm" type="submit">Add Business</button>
                    </form>
                </div>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.name){
        errors.name = "Business name is required"
    }

    return errors;
}

export default reduxForm({
    form: 'AddBusiness',
    validate
}) (AddBusinessAsOwner);