# quickgrid
quick and simple jquery data grid

## usage
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
            date: {
                visible: false,
                title: "Title"
            },
            population: {
                title: function (key) {
                    return "Title";
                }
            }
        }
    })
```
