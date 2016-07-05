(function () {
    'use strict';

    define(function () {
        return [
            {
                key: 'MediaThumbnail',
                labelText: 'Image',
                display: 'image'
            },
            {
                key: 'MediaSmall',
                display: 'image',
                tableColumn: false
            },
            {
                key: 'type',
                labelText: 'Item Type',
                sort: true
            },
            {
                key: 'idno',
                labelText: 'Accession Number',
                sort: true
            },
            {
                key: 'ItemName',
                labelText: 'Item Name',
                sort: true
            },
            {
                key: 'Title',
                labelText: 'Title',
                sort: true
            },
            {
                key: 'Author',
                labelText: 'Author',
                parse: true,
                filter: true,
                display: 'list',
                sort: function (value) {
                    return value.length > 0 ? value[0] : undefined;
                }
            },
            {
                key: 'Creator',
                labelText: 'Creator',
                parse: true,
                filter: 'Value',
                display: 'typed-list',
                sort: function (value) {
                    return value.length > 0 ? value[0].Value : undefined;
                }
            },
            {
                key: 'Publisher',
                labelText: 'Publisher',
                sort: true
            },
            {
                key: 'DateOfPublication',
                labelText: 'Date of Publication',
                sort: true
            },
            {
                key: 'PlaceOfPublication',
                labelText: 'Place of Publication',
                sort: true
            },
            {
                key: 'PublicationType',
                labelText: 'Type',
                sort: true
            },
            {
                key: 'Location',
                labelText: 'Location',
                parse: true,
                skip: 1,
                filter: true,
                display: 'hierarchy',
                sort: function (value) {
                    return value.length > 0 ? value.join(' / ') : undefined;
                }
            }
        ];
    });
}());
