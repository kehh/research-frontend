(function () {
    'use strict';

    define(
        [
            'lodash',
            'knockout'
        ],
        function (_, ko) {
            return function (parameters) {
                var selectedSearchFieldKey, initialFieldAndText,
                    getFieldAndTextForQuery = function (query) {
                        var selectedKey, selectedField;
                        if (!query || !query.children || query.children.length === 0) {
                            return undefined;
                        }
                        selectedKey = query.children[0].field;
                        if (!selectedKey) {
                            return undefined;
                        }
                        selectedField = _.find(parameters.fields(), { key: selectedKey });
                        if (!selectedField || !selectedField.basicSearch) {
                            return undefined;
                        }
                        return {
                            field: selectedKey,
                            text: _(query.children).filter({ field: selectedKey }).map('value').join(' ')
                        };
                    },
                    getQueryForFieldAndText = function (field, text) {
                        return text.length === 0 ? undefined : {
                            operator: 'AND',
                            children: _.map(
                                text.split(/\s+/),
                                function (term) {
                                    return {
                                        field: field,
                                        comparator: 'contains',
                                        value: term
                                    };
                                }
                            )
                        };
                    };

                if (!parameters.fields || parameters.fields().length === 0) {
                    throw new Error('BasicSearchComponent missing required parameter: `fields`.');
                }
                if (!parameters.queryObservable) {
                    throw new Error('BasicSearchComponent missing required parameter: `queryObservable`.');
                }

                initialFieldAndText = getFieldAndTextForQuery(parameters.queryObservable());

                selectedSearchFieldKey = ko.observable(initialFieldAndText && initialFieldAndText.field ? initialFieldAndText.field : parameters.fields()[0].key);
                selectedSearchFieldKey.subscribe(function (key) {
                    parameters.queryObservable(getQueryForFieldAndText(key, this.searchText()));
                }.bind(this));

                this.searchText = ko.observable(initialFieldAndText ? initialFieldAndText.text : '');
                this.searchText.subscribe(function (text) {
                    parameters.queryObservable(getQueryForFieldAndText(selectedSearchFieldKey(), text));
                }.bind(this));

                parameters.queryObservable.subscribe(function (query) {
                    var fieldAndText = getFieldAndTextForQuery(query);
                    selectedSearchFieldKey(fieldAndText ? fieldAndText.field : parameters.fields()[0].key);
                    this.searchText(fieldAndText ? fieldAndText.text : '');
                }.bind(this));

                this.displayedInputFields = ko.pureComputed(function () {
                    return _.filter(parameters.fields(), 'basicSearch');
                }.bind(this));

                this.displayFieldSwitch = ko.pureComputed(function () {
                    return this.displayedInputFields() && this.displayedInputFields().length > 1;
                }.bind(this));

                this.selectedSearchField = ko.pureComputed(function () {
                    return _.find(this.displayedInputFields(), { key: selectedSearchFieldKey() });
                }.bind(this));

                this.placeholder = ko.pureComputed(function () {
                    return 'Search by ' + this.selectedSearchField().labelText + '...';
                }.bind(this));

                this.displayLostQueryWarning = ko.pureComputed(function () {
                    var query = getQueryForFieldAndText(selectedSearchFieldKey(), this.searchText());
                    return !_.isEqual(query, parameters.queryObservable());
                }.bind(this));

                this.isSelectedSearchField = function (field) {
                    return selectedSearchFieldKey() === field.key;
                };

                this.selectSearchField = function (field) {
                    selectedSearchFieldKey(field.key);
                };

                this.glyphiconCssFor = function (field) {
                    var css = { small: true };
                    if (field.glyphicon) {
                        css.glyphicon = true;
                        css['glyphicon-' + field.glyphicon] = true;
                    }
                    return css;
                };
            };
        }
    );
}());
