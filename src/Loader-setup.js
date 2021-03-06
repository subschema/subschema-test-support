const {types} = Subschema;
const {Select, Checkbox} = types;
//Provide a template named SimpleTempalte

class SimpleTemplate extends React.Component {
    render() {
        var {name, title, help, errorClassName, message, fieldClass, children} = this.props;
        return (<div
            className={"form-group field-name " + (message != null ? errorClassName : '') + ' ' +  fieldClass}>
            <div className="col-sm-offset-1 col-sm-10">
                {children}
                <p className="help-block" ref="help">{message || help}</p>
            </div>
        </div>);
    }
}
loader.addTemplate('SimpleTemplate', SimpleTemplate);
//Provide a type named CheckboxSelect

class CheckboxSelect extends React.Component {

    //allows for injection of the Select types.
    static propTypes = Select.propTypes;

    constructor(...rest) {
        super(...rest);
        //init state
        this.state = {disabled: false};
    }

    //inline styles, because this is an example
    render() {
        return <div>
            <Checkbox className='' style={{position: 'absolute',  left:'-5px', top:'5px'}}
                      onChange={(e)=>this.setState({disabled: !e})} checked={!this.state.disabled}/>
            <Select {...this.props} disabled={this.state.disabled}/>
        </div>
    }
}
loader.addType('CheckboxSelect', CheckboxSelect);
class Address {
    schema = {
        address: 'Text',
        city: 'Text',
        state: {
            type: 'CheckboxSelect',
            options: 'CA,FL,VA,IL'
        },
        zipCode: {
            type: 'Text',
            dataType: 'number'
        }
    };
    fields = ['address', 'city', 'state', 'zipCode'];
}
loader.addSchema('Address', new Address);
//Adding a schema manually, this can also be done for types, templates,validators, etc...
loader.addSchema({
    Contact: {
        schema: {
            name: 'Text',
            primary: {
                type: 'Object',
                subSchema: 'Address',
                template: 'SimpleTemplate'
            },
            otherAddresses: {
                canEdit: true,
                canReorder: true,
                canDelete: true,
                canAdd: true,
                type: 'List',
                labelKey: 'address',
                itemType: {
                    type: 'Object',
                    subSchema: 'Address'
                }
            }
        },
        fields: ['name', 'primary', 'otherAddresses']
    }
});
