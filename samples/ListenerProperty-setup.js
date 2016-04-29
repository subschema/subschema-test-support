var {PropTypes, loader, types} = Subschema;
var {Select} = types;

//copy propTypes (don't ref it will break Select)
var {options, ...copyPropTypes} = Select.propTypes;
copyPropTypes.options = PropTypes.listener;

class SelectListen extends React.Component {
    static propTypes = copyPropTypes;

    render() {
        var value = this.props.value;
        if (value == null && this.props.options) {
            value = this.props.options[0].val;
        }
        return <Select {...this.props} value={value}/>
    }
}

loader.addType('SelectListen', SelectListen);