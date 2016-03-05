module.exports = function (content) {
    return  `module.exports = function sampleloader(loader, schema, Subschema, React, valueManager){
    //---injected content here--
        ${content}
    }
    `;
}