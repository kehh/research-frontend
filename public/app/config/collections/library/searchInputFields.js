(function () {
    'use strict';

    define(function () {
        return [
            {
                key: '_fulltext',
                labelText: 'Keyword',
                glyphicon: 'search',
                basicSearch: true
            },
            {
                key: 'ca_objects.Author',
                labelText: 'Author',
                glyphicon: 'user',
                basicSearch: true
            },
            {
                key: 'ca_objects.preferred_labels',
                labelText: 'Title',
                glyphicon: 'certificate',
                basicSearch: true
            },
            {
                key: 'ca_occurrences.preferred_labels',
                labelText: 'Subject',
                glyphicon: 'paperclip',
                basicSearch: true
            },
            {
                key: 'ca_objects.idno',
                labelText: 'Accession Number',
                basicSearch: false
            },
            {
                key: 'ca_objects.Publisher',
                labelText: 'Publisher',
                basicSearch: false
            },
            {
                key: 'ca_objects.DateOfPublication',
                labelText: 'Date of Publication',
                basicSearch: false
            },
            {
                key: 'ca_objects.PlaceOfPublication',
                labelText: 'Place of Publication',
                basicSearch: false
            },
            {
                key: 'ca_objects.PublicationType',
                labelText: 'Publication Type',
                basicSearch: false
            }
        ];
    });
}());
