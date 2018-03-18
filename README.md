# quickgrid
quick and simple jquery data grid. Will be extended with new featues soon.
Currently supports the following:
 - filtering
 - sorting
 - add/edit/remove rows
 - callbacks for onaddrowclick/onrowclick/oneditrowclick/onrowdelete that can be overriden with your custom behaviour
 - events on add/update/delete rows    

## Usage
```javascript
    $(domElement).quickGrid({
        data: [
            {
                property1: value,
                property2: value
            },
            {
                property1: value,
                property2: value
            }
        ],
        columns: {
            property1: {
                visible: false,
                title: "Title"
            },
            property2: {
                title: function (key) {
                    return "Title";
                }
            }
        }
    })
```

## Events
    qgrd:updaterow
        arguments: row data, row number
    qgrd:addrow
        arguments: row data
    qgrd:updaterow
        arguments: row data, row number

## Callbacks
can be passed when initializing plugin to override default behaviour:
Example:
```javascript
    $(domElement).quickGrid({
        data: [
            //...
        ],
        onrowclick: function (rowdata, rownum) {
            alert ("row " + rownum + " clicked");
        },
    })
```
    onaddrowclick        
    onrowclick
        arguments: row data, row number
    oneditrowclick
        arguments: row data, row number
    onrowdelete
        arguments: row data, row number

## Column settings
can be passed when initializing plugin using columns propoerty:
Example:
```javascript
    $(domElement).quickGrid({
        data: [
            {
                property1: value,
                property2: value
            }
            //...
        ],
        columns: {
            property1: {
                visible: false,
                title: "Title"
            }
        }
    })
```
    visible: boolean
        set column visibility, default is true
    title: string or function
        set column header caption