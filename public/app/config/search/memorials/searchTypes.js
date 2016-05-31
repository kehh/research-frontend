(function () {
    'use strict';

    define(
        [],
        function () {
            return [
                {
                    key: '_fulltext',
                    labelText: 'Keyword',
                    glyphicon: 'search'
                },
                {
                    key: 'ca_objects.preferred_labels',
                    labelText: 'Item Name',
                    glyphicon: 'certificate'
                },
                {
                    key: 'ca_occurrences',
                    labelText: 'Subject',
                    glyphicon: 'paperclip'
                }
            ];
        }
    );
}());
