(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SubschemaTestSupport"] = factory();
	else
		root["SubschemaTestSupport"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	///(?!.*(index).js$).*\.js(x)
	var ctx = __webpack_require__(1);
	var rctx = __webpack_require__(30);
	module.exports = ctx.keys().reduce(function (obj, key) {

	    if (/(index|-setup|context)/.test(key)) {
	        return obj;
	    }
	    var setup = obj[key.replace(/\.jsx?$/, '').replace(/.*\//, '')] = ctx(key);
	    if (setup.setupFile) {
	     var txt =   setup.setupTxt = rctx('./'+setup.setupFile);
	    }
	    return obj;
	}, {});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Autocomplete.js": 3,
		"./Basic.js": 4,
		"./CarMake.js": 6,
		"./Checkboxes.js": 7,
		"./Conditional.js": 8,
		"./Content.js": 9,
		"./CustomType.js": 11,
		"./Expression.js": 13,
		"./Hidden.js": 14,
		"./KitchenSink.js": 16,
		"./ListenerProperty.js": 18,
		"./Loader.js": 20,
		"./Login.js": 21,
		"./Modal.js": 22,
		"./NestedForms.js": 23,
		"./Questionaire.js": 24,
		"./Restricted.js": 25,
		"./Select.js": 26,
		"./Todos.js": 27,
		"./Wizard.js": 28,
		"./radio.js": 29
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	    description: `Autocomplete adds static or dynamic autocompletion.
	     If options are passed than it behaves mostly like the select component.
	     If a processor is passed than it can load dynamically.
	     `,
	    schema: {
	        schema: {
	            'simple': {
	                type: 'Autocomplete',
	                options: ['aaaa', 'aaab', 'aba', 'baaa', 'caaa']
	            },
	            'ajax': {
	                type: 'Autocomplete',
	                processor: 'fakeAjax'
	            }
	        }
	    },
	    data: {
	        simple: 'aaaa',
	        ajax: {
	            val: '1',
	            label: 'a 1'
	        }
	    },
	    setup: function (context, props) {
	        props.loader = 'Subschema.loaderFactory([Subschema.DefaultLoader])';
	    },
	    setupFile: 'Autocomplete-setup.js'
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Super basic form, with select and a requied name',
	    schema: {
	        "schema": {
	            "title": {"type": "Select", "options": ["Mr", "Mrs", "Ms"]},
	            "name": {type: "Text", validators: ['required']},
	            "age": {type: 'Number'}

	        },
	        "fieldsets": [
	            {
	                "legend": "Name",
	                "fields": "title, name, age",
	                buttons: [{
	                    label: 'Cancel',
	                    action: 'cancel',
	                    buttonClass: 'btn'
	                }, {
	                    label: 'Submit', action: 'submit',
	                    buttonClass: 'btn btn-primary'
	                }]
	            }]
	    },
	    data: {
	        title: 'Mrs',
	        name: 'Johnson'
	    },
	    errors: {
	        name: [{
	            message: 'Name is already taken'
	        }]
	    }

	};


/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	    title: 'Selection of Selections',
	    description: 'This shows how selects can be connected.\
	     ',
	    schema: {
	        schema: {
	            'make': {
	                title: 'Make',
	                type: 'Select',
	                placeholder: 'Select a make'
	            },
	            'model': {
	                title: 'Model',
	                type: 'Select',
	                placeholder: 'Select a make first',
	                conditional: {
	                    'listen': 'make',
	                    'operator': 'falsey'
	                }
	            }
	        },
	        fieldsets: [{legend: 'Make And Model Linked Selects', fields: ['make', 'model']}]
	    },
	    data: {
	        make: 'audi',
	        model: '4000'
	    },
	    setupFile: 'CarMake-setup.js'
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'The most usable of UI components the lowly checkbox.   This shows single value, groups of checkboxes and a true/false',
	    schema: {
	        schema: {
	            group1: {
	                options: ['one', 'two', 'three'],
	                type: 'Checkboxes'
	            },
	            group2: {
	                options: [{val: 'one'}, {val: 'two', labelHTML: '<h2>awesome</h2>'}],
	                type: 'Checkboxes'
	            },
	            trueFalse: {
	                type: 'Checkbox',
	                title: 'True or False No Value'
	            },
	            groupsOfGroups: {
	                title: 'Group of Groups',
	                options: [
	                    {
	                        group: 'North America', options: [
	                        {val: 'ca', label: 'Canada'},
	                        {val: 'us', label: 'United States'}
	                    ]
	                    },
	                    {
	                        group: 'Europe', options: [
	                        {val: 'es', label: 'Spain'},
	                        {val: 'fr', label: 'France'},
	                        {val: 'uk', label: 'United Kingdom'}
	                    ]
	                    }
	                ],
	                type: 'Checkboxes'
	            }
	        }
	    },
	    data: {
	        trueFalse: true,
	        group1: ['two'],
	        group2: ['one'],
	        groupsOfGroups: [
	            'us',
	            'uk'
	        ]
	    },
	    errors: {
	        groupsOfGroups: [{message: 'Even a checkbox can go wrong'}]
	    }


	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Shows how you could use a conditional to show hide, based on error or toggle value.  Click data and error in the menu see it in action',
	    "schema": {
	        "schema": {
	            "title": {
	                "type": "Select",
	                "options": ["Mr", "Mrs", "Ms"]
	            },
	            "name": "Text",
	            "email": {
	                type: "Text",
	                dataType: 'email',
	                validators: ['required', 'email']
	            },
	            "showAddress": {
	                "type": "Checkbox",
	                "title": "Show Address",
	                "help":"Click this to toggle the address"

	            },
	            "address": {
	                type: "Object",
	                title: false,
	                conditional: {
	                    listen: "showAddress",
	                    operator: "truthy"/*,
	                    error: 'address'*/
	                },
	                fields: "street, city, state, zip",
	                subSchema: {
	                    street: {type: 'Text', validators: ['required']},
	                    city: 'Text',
	                    state: {
	                        options: ['CA', 'NV', 'DE'],
	                        type: 'Select'
	                    },
	                    zip: {
	                        type: 'Text',
	                        validators: ['required', {type:'regexp', regexp:'/^[0-9]{5}(-([0-9]{4}))?$/'}]
	                    }
	                }
	            }
	        },
	        "fieldsets": [{
	            "legend": "Name",
	            "fields": ["title", "name", "email", "showAddress", "address"],
	            buttons: [
	                {
	                    label: "Submit",
	                    className: 'btn btn-primary pull-right'
	                }
	            ]
	        }]
	    },
	    data: {
	        title: 'Mr',
	        name: 'bob',
	        email: 'bob@b.co',
	        showAddress: true,
	        address: {
	            street: '1 First St',
	            city: 'San Jose',
	            state: 'CA',
	            zip: 95109
	        }
	    },
	    errors: {
	        'address.city': [{
	            message: 'Not the right place'
	        }]
	    }
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Super basic form, with select and a requied name that shows content',
	    schema: {
	        "schema": {
	            "title": {"type": "Select", "options": ["Mr", "Mrs", "Ms"]},
	            "name": {type: "Text", validators: ['required']},
	            "age":{type:'Text', dataType:'number'},
	            'content':{

	                type:"Content",
	                title:false,
	                className:'col-sm-offset-2',
	                content:'{title} {..name} is {age}'
	            }

	        },
	        "fieldsets": [{"legend": "Name", "fields": ["title", "name","age", "content"]}]
	    },
	    data: {
	        title: 'Mrs',
	        name: 'Johnson',
	        age:33
	    },
	    errors: {
	        name: [{
	            message: 'Name is already taken'
	        }]
	    }

	};


/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	    name: 'Custom Type',
	    description: 'Shows how to create a custom type',
	    schema: {
	        "schema": {
	            "areYouSure": {
	                "type": "SwitchButton",
	                "onText": "On",
	                "offText": "Off",
	                "title": "Are you sure?"
	            }
	        },
	    },
	    props:{
	        loader:true
	    },
	    data: {
	        areYouSure: true
	    },
	    setupFile: 'CustomType-setup.js'
	}


/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Shows how you can use Expressions on Custom Types',
	    schema: {
	        schema: {
	            selectPage: {
	                title: "Select a Page",
	                type: 'Select',
	                options: 'Content, Conditional, Basic, Autocomplete'
	            },
	            link1: {
	                type: 'Anchor',
	                title: ' ',

	                label: 'Go To {selectPage}',
	                href: '/#/{selectPage}',
	                help: "This link is generated by the above selector"
	            }
	        },
	        fields: "selectPage, link1"
	    },
	    data: {
	        selectPage: 'Content'
	    },
	    props: {
	        "loader": true
	    },
	    setupFile: 'Expression-setup.js'
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Sometimes you do not want to show your data.  Hidden type to the rescue.\
	    The only thing special about hidden, is that it does not render the surrounding editor markup, as if something is hidden its\
	    label should be hidden also\
	    ',
	    schema: {
	        schema: {
	            hideme: {
	                type: 'Hidden'
	            }

	        },
	        fieldsets: {legend: 'Magical Hidden Field', fields: ['hideme']}
	    },
	    data: {
	        hideme: {
	            stuff: {
	                is: {
	                    here: 1
	                }
	            }
	        }
	    },
	    errors: {}


	}

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports) {

	module.exports = {
	    description: "All the components with no options passed, just a place to make sure everything is here.   This may not be a good idea.",
	    schema: {
	        schema: {}
	    },
	    setupFile: 'KitchenSink-setup.js'
	};

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Shows how you can use Listeners on Custom Types',
	    schema: {
	        schema: {
	            myDefault: {
	                type: 'SelectListen',
	                options: 'favorites'
	            },
	            favorites: {
	                type: 'List',
	                canAdd: true,
	                canEdit: true,
	                canReorder: true,
	                canDelete: true,
	                labelKey: 'label',
	                itemType: {
	                    type: 'Object',
	                    subSchema: {
	                        val: 'Text',
	                        label: 'Text'
	                    }
	                }
	            }
	        },
	        fields: ["myDefault", "favorites"]
	    },
	    props: {
	        loader: true
	    },
	    data: {
	        myDefault:'got',
	        favorites: [
	            {
	                label: 'Game of Thrones',
	                val: 'got'
	            },
	            {
	                label: 'Casual',
	                val: 'casual'
	            }
	        ]
	    },
	    setupFile: 'ListenerProperty-setup.js'
	}


/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'This shows how to use a loader to load a schema.\
	    It can be used to load Templates, Processors, Types, Schemas and Validators. Here we are demonstrating templates and schemas, but the same pattern applies to the other types\
	    They all follow the same pattern.   Note the list`type` is optional, but useful for future introspection if needed\
	    ',
	    schema: 'Contact',
	    data: {
	        name: 'Robert Loblaw',
	        primary: {
	            address: '123 Main St',
	            city: 'San Jose',
	            state: 'CA'
	        },
	        otherAddresses: [
	            {
	                address: '456 2nd St',
	                city: 'Chicago',
	                state: 'IL'
	            },
	            {
	                address: '3232 Fillmore St',
	                city: 'Arlington',
	                state: 'VA'
	            }
	        ]
	    },
	    errors: {
	        'primary.address': [{message: 'No Such Place'}]
	    },
	    props: {
	        loader: true,
	        schema: 'Contact'
	    },
	    setupFile: 'Loader-setup.js'
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'This is a very basic login form. But it shows both email validation and multi field validation.\n It also shows nested fieldsets',
	    schema: {
	        schema: {
	            username: {
	                type: 'Text',

	                help: 'Please enter your email address',
	                validators: ['required', 'email']
	            },
	            password: {
	                validators: ['required'],
	                type: 'Password'
	            },
	            confirmPassword: {
	                type: 'Password',
	                validators: [{type: 'match', field: 'password', message: 'Passwords do not match'}]
	            }
	        },
	        fieldsets: [{
	            legend: 'Login',
	            fields: ['username', 'password', 'confirmPassword'],
	            buttons:[{label:'Login',buttonClass:'btn btn-primary'}]
	        }]
	    },
	    data: {},
	    errors: {
	        username: [{
	            message: 'This username already exists'
	        }]
	    }


	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Shows how you could use a conditional with a modal',
	    "schema": {
	        "schema": {
	            "title": {
	                "type": "Select",
	                "options": ["Mr", "Mrs", "Ms"]
	            },
	            "name": "Text",
	            "email": {
	                type: "Text",
	                dataType: 'email',
	                validators: ['required', 'email']
	            },
	            "showAddressModal": {
	                "type": "Checkbox",
	                "title": "Edit Address",
	                "help": "Click the checkbox to see the modal"
	            },
	            "address": {
	                type: "Object",
	                title: false,
	                conditional: {
	                    listen: "showAddressModal",
	                    operator: "truthy",
	                    template: 'ModalTemplate',
	                    dismiss: 'showAddressModal',
	                    title: "See the modal?",
	                    buttons: {
	                        buttonsClass:'pull-right btn-group',
	                        buttons: [
	                            {
	                                label: "Cancel",
	                                action: 'cancel',
	                                className: 'btn'
	                            },
	                            {
	                                label: "Save",
	                                action: 'submit',
	                                className: 'btn btn-primary'
	                            }
	                        ]
	                    }
	                },

	                fields: "street, city, state, zip",
	                subSchema: {
	                    street: {type: 'Text', validators: ['required']},
	                    city: 'Text',
	                    state: {
	                        options: ['CA', 'NV', 'DE'],
	                        type: 'Select'
	                    },
	                    zip: {
	                        type: 'Text',
	                        validators: ['required', {type: 'regexp', regexp: '/^[0-9]{5}(-([0-9]{4}))?$/'}]
	                    }
	                }
	            }
	        },
	        "fieldsets": [{
	            "legend": "Name",
	            "fields": ["title", "name", "email", "showAddressModal", "address"],
	            buttons: [

	                {
	                    label: "Submit",
	                    className: 'btn btn-primary pull-right'
	                }
	            ]
	        }]
	    },
	    data: {
	        title: 'Mr',
	        name: 'bob',
	        email: 'bob@b.co',

	        address: {
	            street: '1 First St',
	            city: 'San Jose',
	            state: 'CA',
	            zip: 95109
	        }
	    },
	    errors: {
	        'address.city': [{
	            message: 'Not the right place'
	        }]
	    }
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Nested froms allow for deeply structured object<br/>. If you need more flexibility consider Mixed or List',
	    schema: {
	        "schema": {
	            "title": {
	                "type": "Select",
	                "options": ["Mr", "Mrs", "Ms"]
	            },
	            "name": "Text",
	            "email": {
	                type: "Text",
	                dataType: 'email',
	                validators: ['required', 'email']
	            },
	            "address": {
	                type: "Object",
	                title: false,
	                subSchema: {
	                    street: {type: 'Text', validators: ['required']},
	                    city: 'Text',
	                    state: {
	                        options: ['CA', 'NV', 'DE'],
	                        type: 'Select'
	                    },
	                    zip: {
	                        type: 'Text',
	                        validators: ['required', {type: 'regexp', regexp: '/^[0-9]{5}(-([0-9]{4}))?$/'}]
	                    }
	                }
	            }
	        },
	        buttons: 'Submit',
	        "fieldsets": [{
	            "legend": "Name",
	            "fields": ["title", "name", "email"]
	        },
	            {
	                legend: "Address",
	                fields: "address.street, address.city, address.state, address.zip"
	            }

	        ]
	    },
	    data: {
	        title: 'Mr',
	        name: 'bob',
	        email: 'bob@b.co',
	        address: {
	            street: '1 First St',
	            city: 'San Jose',
	            state: 'CA',
	            zip: 95109
	        }
	    },
	    errors: {
	        'address.city': [{
	            message: 'Not the right place'
	        }]
	    }
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Questionaire shows the used of the Mixed Type. \
	     The mixed type is just like a List, however it can have non numeric keys.\
	     The keys and the values are configurable. As of now however you can only have 1 key type and 1 object type\
	     <p>* Press the Data button in the toolbar to see it with data</p>',
	    schema: {
	        schema: {
	            questionare: {
	                type: "Mixed",
	                keyType: 'Text',
	                title: 'Questioniare',
	                labelKey: 'answer',
	                canEdit: true,
	                canDelete: true,
	                canReorder: true,
	                canAdd: true,
	                valueType: {
	                    type: 'Object',
	                    subSchema: {
	                        answer: 'Text',
	                        feel: {
	                            type: 'Radio',
	                            options: ['Good', 'Bad', 'Indifferent']
	                        }
	                    }
	                }
	            }
	        }
	    },
	    data: {
	        questionare: {
	            question1: {
	                answer: 'I know nothing',
	                feel: 'Good'
	            },
	            question2: {
	                answer: 'I still know nothing',
	                feel: 'bad'
	            }
	        }
	    },
	    errors: {
	        'questionare.question2.answer': [{
	            message: 'Are you sure?'
	        }]
	    }
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Super basic form, with select and a requied name',
	    schema: {
	        "schema": {
	            "mm/yy": {"type": "Restricted", formatter: "shortDate", title: "MM/YY"},
	            "ccard": {
	                "type": "Restricted",
	                "formatter": "creditcard"
	            },
	            "capitalize": {
	                "type": "Restricted",
	                "formatter": "capitalize"
	            },
	            "title": {
	                "type": "Restricted",
	                "formatter": "title"
	            },
	            "uszip": {
	                "title": "US Zip",
	                "type": "Restricted",
	                "formatter": "uszip"

	            },
	            '###': {
	                "title": "Pattern",
	                "type": "Restricted",
	                "formatter": "###"
	            },
	            "unrestricted": {
	                "title": "Plain",
	                "type": "Text"
	            },
	            'usphone': {
	                "title": "US Phone",
	                "type": "Restricted",
	                "formatter": "1 (###) ###-####"
	            }/*,
	             'dollars':{
	             "title":"US Dollars",
	             "type":"Restricted",
	             "formatter":"00.00"
	             }
	             */
	        },
	        "fieldsets": [{
	            "legend": "Restricted values",
	            "fields": ["unrestricted", "title","capitalize", "mm/yy", "ccard", "uszip", "###", 'usphone']
	        }]
	    },
	    data: {
	        "mm/yy": '02/22',
	        "ccard": '4111 1111 1111 1111',
	        "usphone":"1 (555) 123-4567",
	        "capitalize":"Hello world",
	        "title":"Hello World",
	        "###":"123",
	        "uszip":"22202"
	    },
	    errors: {
	        ccard: [{
	            message: 'Invalid Card #'
	        }]
	    }

	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Selects for selection',
	    schema: {
	        schema: {
	            select: {
	                options: [
	                    {
	                        val: 0,
	                        label: "Option 1"
	                    },
	                    {
	                        val: 1,
	                        label: "Option 2"
	                    },
	                    {
	                        val: 2,
	                        label: "Option 3"
	                    }
	                ],
	                type: 'Select'
	            },
	            withPlaceholder: {
	                placeholder: 'Please Select An Option',
	                help: 'The placeholder becomes the default selection on an select box, use required to force selection',
	                options: [
	                    {
	                        val: 0,
	                        label: "Option 1"
	                    },
	                    {
	                        val: 1,
	                        label: "Option 2"
	                    },
	                    {
	                        val: 2,
	                        label: "Option 3"
	                    }
	                ],
	                type: 'Select'
	            },
	            multiple: {
	                multiple: true,
	                help: 'The placeholder becomes you can select multiple, not having a placeholder forces selection',
	                options: [
	                    {
	                        val: 0,
	                        label: "Option 1"
	                    },
	                    {
	                        val: 1,
	                        label: "Option 2"
	                    },
	                    {
	                        val: 2,
	                        label: "Option 3"
	                    }
	                ],
	                type: 'Select'
	            },
	            multipleWithPlaceholder: {
	                multiple: true,
	                placeholder:'You do not have to choose',
	                help: 'The placeholder becomes you can select multiple, having a placeholder allows for null selection (hold shift keys to select multiple)',
	                options: [
	                    {
	                        val: 0,
	                        label: "Option 1"
	                    },
	                    {
	                        val: 1,
	                        label: "Option 2"
	                    },
	                    {
	                        val: 2,
	                        label: "Option 3"
	                    }
	                ],
	                type: 'Select'
	            }
	        }
	    },
	    data: {
	        select: 1,
	        withPlaceholder: 2,
	        multiple: [0, 2]
	    },
	    errors: {}


	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'A super simple <b>Todo List</b> because every body\'s gotta.   This one shows how the List type works.   List editing can be turned on or off, by default its off ',
	    schema: {
	        "schema": {
	            "tasks": {
	                type: "List",
	                title: 'Task',
	                canAdd: true,
	                canDelete: true,
	                canReorder: true,
	                canEdit: true,
	                inline:true,
	                addButton:{
	                    "label": "Add Task",
	                    "className": "btn btn-default btn-add"
	                }
	            }
	        },
	        "fieldsets": [{
	            "legend": "Todo",
	            "fields": ["tasks"]
	        }]
	    },
	    data: {
	        tasks: ['Get Stuff', 'Do Stuff', 'Go Home']
	    },
	    errors: {
	        'todos.1': [{
	            message: 'No your not going to'
	        }]
	    }
	}
	;


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'This shows a multistep form aka Wizard.\
	    The basics are your fieldsets become steps in a wizard.  The legend becomes the label and the fields are rendered\
	    Sometimes you a good wizard goes a long way\
	    ',
	    props: {
	        template: 'WizardTemplate'
	    },
	    data: {
	        username: 'a@b.c',
	        password: '123',
	        confirmPassword: '123',
	        terms: false,
	        address: {
	            address: '1 Main St',
	            city: 'Arlington',
	            state: 'CA',
	            zip: 95130
	        }
	    },
	    schema: {
	        schema: {
	            username: {
	                type: 'Text',
	                help: 'Please enter your email address',
	                validators: ['required', 'email']
	            },
	            password: {
	                validators: ['required'],
	                type: 'Password'
	            },
	            confirmPassword: {
	                type: 'Password',
	                validators: ['required', {type: 'match', field: 'password', message: 'Passwords do not match'}]
	            },
	            terms: {
	                type: 'Checkbox',
	                title: 'Do you accept the terms?'
	            },
	            address: {
	                type: 'Object',
	                title:false,
	                help:false,
	                subSchema: {
	                    'address': {
	                        type: 'Text',
	                        validators: ['required']
	                    },
	                    'city': {
	                        type: 'Text',
	                        validators: ['required']
	                    },
	                    'state': {
	                        type: 'Select',
	                        options: ['CA', 'VA', 'DC'],
	                        validators: ['required']
	                    }
	                }
	            }

	        },
	        template:'WizardTemplate',
	        fieldsets: [{
	            legend: 'Account',
	            fields: ['username', 'password', 'confirmPassword']
	        }, {
	            legend: 'Terms',
	            fields: ['terms']

	        }, {
	            legend: 'Address',
	            fields: ['address.address', 'address.city', 'address.state']
	        }]
	    }
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
	    description: 'Getting radios right is suprisingly tricky.  Here we demonstrate how to use groups radios and radio groups',
	    schema: {
	        schema: {
	            radio1: {
	                options:  "Option 1, Option 2, Option 3",
	                checkedClass: 'checked',
	                type: 'Radio',
	                title:'Radio with forceSelection',
	                forceSelection: true
	            },
	            radio2: {
	                checkedClass: 'checked',
	                options: ['Sterling', 'Lana', 'Cyril', 'Cheryl', 'Pam'],
	                type: 'Radio'
	            },
	            radioWithLabel: {
	                options: [
	                    {
	                        label: '<b>HTML</b>'
	                    }
	                ],
	                type: 'Radio'
	            }
	        }
	    },
	    data: {
	        radio1: 1,
	        radio2: 'Cyril',
	        radioWithLabel: 0
	    },
	    errors: {}


	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Autocomplete-setup.js": 31,
		"./CarMake-setup.js": 32,
		"./CustomType-setup.js": 33,
		"./Expression-setup.js": 34,
		"./KitchenSink-setup.js": 35,
		"./ListenerProperty-setup.js": 36,
		"./Loader-setup.js": 37
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 30;


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "/**\n * Register a fake loader.\n * @type {{fetch: Function, format: Function}}\n */\nvar fakeAjax = {\n    fetch: function (url, value, component, cb) {\n        //You can fire an ajax request here.\n        var ti = setTimeout(function () {\n            var ret = [];\n            for (var i = 0; i < (10 - value.length); i++) {\n                ret.push({\n                    val: i,\n                    label: value + ' ' + i\n                });\n            }\n\n            //callback err, value.\n            cb(null, ret);\n        }, 200);\n        return {\n            cancel: function () {\n                //You could abort an AJAX request here.\n                clearTimeout(ti);\n            }\n        }\n\n    },\n    value: function (obj) {\n        return obj && obj.val;\n    },\n    format: function (value) {\n        return value && value.label;\n    }\n};\n\nvar fakeLoader = {\n    loadProcessor: function (name) {\n        if (name === 'fakeAjax') {\n            return fakeAjax\n        }\n    },\n    listProcessors: function () {\n        return [{name: 'fakeAjax', processor: fakeAjax}]\n    }\n};\n\nloader.addLoader(fakeLoader);"

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "/**\n * Borrowed from react-native docs.\n */\nvar CAR_MAKES_AND_MODELS = {\n    amc: {\n        name: 'AMC',\n        models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer']\n    },\n    alfa: {\n        name: 'Alfa-Romeo',\n        models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider']\n    },\n    aston: {\n        name: 'Aston Martin',\n        models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage']\n    },\n    audi: {\n        name: 'Audi',\n        models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7']\n    },\n    austin: {\n        name: 'Austin',\n        models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess']\n    },\n    borgward: {\n        name: 'Borgward',\n        models: ['Hansa', 'Isabella', 'P100']\n    },\n    buick: {\n        name: 'Buick',\n        models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',\n            'Roadmaster', 'Skylark']\n    },\n    cadillac: {\n        name: 'Cadillac',\n        models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville']\n    },\n    chevrolet: {\n        name: 'Chevrolet',\n        models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',\n            'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt']\n    }\n};\n\nvar fields = schema.fieldsets[0].fields;\n/**\n * Create the schema programatically.\n */\nschema.schema.make.options = Object.keys(CAR_MAKES_AND_MODELS).map(function (key) {\n    fields.push(key);\n    var {name, models} = CAR_MAKES_AND_MODELS[key];\n    //setup the key values of them all.\n    schema.schema[key] = {\n        title: 'Model',\n        conditional: {\n            //This is the value to listen to trigger the conditional\n            listen: 'make',\n            //This is the value to compare the make's value to\n            value: key,\n            //Strict equals operator\n            operator: '===',\n            //We want the conditional to update the 'model' path.  This is a bit\n            // experimental at the time, but may be the future of how to handle these\n            // situations.\n            path: 'model'\n        },\n        type: 'Select',\n        placeholder:'Select a model of '+name,\n        options: models\n    }\n    /**\n     * Return the makes\n     */\n    return {\n        label: name,\n        val: key\n    }\n});\n"

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "const {decorators, PropTypes, tutils} = Subschema;\nconst {provide} = decorators;\nconst {extend} = tutils;\n\n//This adds it to the loader, loader.addType still works.\n@provide.type\nclass SwitchButton extends React.Component {\n    //Prevents form-control from being passed to className.\n    static inputClassName = ' ';\n\n    static propTypes = {\n        //This tells subschema to not process e.target.value, but just take the value.\n        onChange: PropTypes.valueEvent,\n        //Normal React.PropTypes\n        onText: React.PropTypes.string,\n        offText: React.PropTypes.string,\n        value: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(['on', 'off', 0, 1])])   //Values can be (true, 1, '1', 'ON')\n    };\n\n    static defaultProps = {\n        onText: \"ON\",\n        offText: \"OFF\"\n    };\n\n    //In case you have \"special\" value handling.\n    isChecked(value) {\n        return value === true || value === 1 || value === 'on';\n    }\n\n    //This is bound to the object instance\n    handleClick = (e)=> {\n        //This updates the valueManager\n        this.props.onChange(this.isChecked(this.props.value) ? '' : 'on');\n    };\n\n    render() {\n        var props = this.props;\n        var isChecked = this.isChecked(props.value);\n\n        //you prolly won't do it this way, but use classes instead, but the demo platform\n        // has its limitations.\n        var container = extend({}, styles.container, isChecked ? styles.on : styles.off);\n        var button = extend({}, styles.button, isChecked ? styles.buttonOn : styles.buttonOff);\n\n        return <div className={props.className} style={styles.fieldContainer}>\n            <div style={container} onClick={this.handleClick}>\n                <input name={props.name} type=\"hidden\" value={this.props.value}/>\n                {isChecked === true ? props.onText : props.offText}\n                <span style={button}/>\n            </div>\n        </div>\n    }\n\n}\n\n//Normally you would do this via CSS but the demo can't load css dynamically, so this a workaround.\nvar styles = {\n    fieldContainer: {\n        display: 'block',\n        width: '100%',\n        height: '34px',\n        padding: '6px 12px',\n        fontSize: '14px',\n        lineHeight: '1.42857143',\n        color: '#555',\n        backgroundColor: '#fff'\n    },\n    container: {\n        position: 'relative',\n        borderRadius: \"11px\",\n        backgroundColor: '#fff',\n        border: 'inset 2px',\n        boxSizing: 'border-box',\n        display: 'inline-block'\n    },\n    on: {\n        color: 'white',\n        backgroundColor: 'blue',\n        paddingLeft: '20px',\n        paddingRight: '6px',\n\n    },\n    off: {\n        paddingLeft: '6px',\n        paddingRight: '20px'\n    },\n    button: {\n        top: 2,\n        display: 'inline-block',\n        height: '16px',\n        width: '16px',\n        boxSizing: 'border-box',\n        borderRadius: '8px',\n        border: '5px outset rgba(204, 204, 204, .4)',\n        position: 'absolute',\n        transition: 'all .2s',\n\n    },\n    buttonOn: {\n        left: 1,\n        border:'5px outset rgba(255,255,255,.8)'\n\n    },\n    buttonOff: {\n        left: '100%',\n        marginLeft: '-18px',\n    }\n};\n"

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "const {PropTypes, decorators} = Subschema;\nconst {provide} = decorators;\nconst {type} = provide;\n\n@type\nclass Anchor extends React.Component {\n\n    static propTypes = {\n        //by making this propType an expression it will evaluate it dynamically.\n        href: PropTypes.expression,\n        label: PropTypes.expression\n    };\n\n    static defaultProps = {\n        href: '#/{.}'\n    };\n\n    render() {\n        return <a href={this.props.href}>{this.props.label}</a>\n    }\n}\n\n"

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "loader.listTypes().forEach(function (type) {\n    schema.schema[type.name] = {\n        type: type.name,\n        fieldClass: 'row'\n    }\n});\n"

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "var {PropTypes, decorators, types} = Subschema;\nvar {provide} = decorators;\nvar {type} = provide;\nvar {Select} = types;\n\n//copy propTypes (don't ref it will break Select)\nvar {options, ...copyPropTypes} = Select.propTypes;\ncopyPropTypes.options = PropTypes.listener;\n\n@type\nclass SelectListen extends React.Component {\n    static propTypes = copyPropTypes;\n\n    render() {\n        var value = this.props.value;\n        if (value == null && this.props.options) {\n            value = this.props.options[0].val;\n        }\n        return <Select {...this.props} value={value}/>\n    }\n}\n"

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "const {types, decorators} = Subschema;\nconst {provide} = decorators;\nconst {type, template} = provide;\nconst {Select, Checkbox} = types;\n//Provide a template named SimpleTempalte\n\n@template\nclass SimpleTemplate extends React.Component {\n    render() {\n        var {name, title, help, errorClassName, message, fieldClass, children} = this.props;\n        return (<div\n            className={\"form-group field-name \" + (message != null ? errorClassName : '') + ' ' +  fieldClass}>\n            <div className=\"col-sm-offset-1 col-sm-10\">\n                {children}\n                <p className=\"help-block\" ref=\"help\">{message || help}</p>\n            </div>\n        </div>);\n    }\n}\n//Provide a type named CheckboxSelect\n@type\nclass CheckboxSelect extends React.Component {\n\n    //allows for injection of the Select types.\n    static propTypes = Select.propTypes;\n\n    constructor(...rest) {\n        super(...rest);\n        //init state\n        this.state = {disabled: false};\n    }\n\n    //inline styles, because this is an example\n    render() {\n        return <div>\n            <Checkbox className='' style={{position: 'absolute',  left:'-5px', top:'5px'}}\n                      onChange={(e)=>this.setState({disabled: !e})} checked={!this.state.disabled}/>\n            <Select {...this.props} disabled={this.state.disabled}/>\n        </div>\n    }\n}\n//Use a class as a schema, this news the class before adding it.\n@provide.schema\nclass Address {\n    schema = {\n        address: 'Text',\n        city: 'Text',\n        state: {\n            type: 'CheckboxSelect',\n            options: 'CA,FL,VA,IL'\n        },\n        zipCode: {\n            type: 'Text',\n            dataType: 'number'\n        }\n    };\n    fields = ['address', 'city', 'state', 'zipCode'];\n}\n//Adding a schema manually, this can also be done for types, templates,validators, etc...\nloader.addSchema({\n    Contact: {\n        schema: {\n            name: 'Text',\n            primary: {\n                type: 'Object',\n                subSchema: 'Address',\n                template: 'SimpleTemplate'\n            },\n            otherAddresses: {\n                canEdit: true,\n                canReorder: true,\n                canDelete: true,\n                canAdd: true,\n                type: 'List',\n                labelKey: 'address',\n                itemType: {\n                    type: 'Object',\n                    subSchema: 'Address'\n                }\n            }\n        },\n        fields: ['name', 'primary', 'otherAddresses']\n    }\n});\n"

/***/ }
/******/ ])
});
;