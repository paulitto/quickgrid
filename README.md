# quickgrid
quick and simple jquery data grid

## usage
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
			property1: false,
			title: "Title"
		},
		population: {
			title: function (key) {
			    return "Title";
		    }
		}
	}
})
