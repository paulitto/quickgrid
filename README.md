# quickgrid
Quick and simple jquery data grid. Will be extended with new featues soon.
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

## How to include:

### Install

Execute `npm install quickgrid` to download package to node_modules

### include from html

quickgrid.min.js already includes basic inline styles
so you can just include it as script after jquery
``` html
<script src="node_modules\jquery\dist\jquery.min.js"></script>        
<script src="node_modules\quickgrid\dist\quickgrid.min.js"></script>
```
or to include non-minified version
``` html
<link href="node_modules\quickgrid\src\quickgrid.css" rel="stylesheet">
<script src="node_modules\jquery\dist\jquery.min.js"></script>        
<script src="node_modules\quickgrid\src\quickgrid.js"></script>
```

### include as es6 module

-----------------------------------------
index.html
``` html
<script type="module" src="main.js"></script>
```

main.js

``` javascript
import './node_modules/jquery/dist/jquery.js'
import './node_modules/quickgrid/dist/quickgrid.min.js';

//now you can use quickgrid here 
$(function(){
    $('<div></div>').appendTo('body').quickGrid({
        data : [ ... ]
    })
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