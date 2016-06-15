(function () {
    'use strict';

    define(function () {
        return [
            {
                key: 'MediaThumbnail',
                labelText: 'Image',
                display: 'image',
                placeholder: '(No image available)'
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
                key: 'Dates',
                labelText: 'Dates',
                sort: true
            },
            {
                key: 'Importance',
                labelText: 'Importance',
                sort: true
            },
            {
                key: 'Classification',
                labelText: 'Classification',
                parse: true,
                skipNested: 1,
                filter: true,
                display: 'hierarchy-list',
                sort: function (value) {
                    return value.length > 0 && value[0].length > 0 ? value[0].join(' / ') : undefined;
                }
            }
        ];
    });
}());
