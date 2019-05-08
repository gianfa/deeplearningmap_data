// Data models

const nodeIdentity = {
    "id" : {
            type: Int16Array,
            description: 
                "The Id of the node, in the graph. It is unique, so" + 
                " there are not two nodes having the same number as Id.",
        },
    "name": {
        type: String,
        description: "The full name of the netowrk, e.g. Multilayer Perceptron",
    },
    "abbreviation": {
        type: String,
        description:
            "The commonly abbreviated name, such like CNN," +
            " used for Convolutional Neural Network.",
    },
    "first_appearence": {
        type: String,
        description: "The year, or the nearly time of first pubblication of the network."
    },
    "papers": {
        type: [paperIdentity],
        description: "Array of object describing the papers using the network described here.",
    },
    "from" : {
        type: [Number],
        description: 
        "Array of Ids of parent nodes. They are reference to the Neural Networks" +
        " considered as parent of the current; e.g. For R-CNN you can wright" +
        " the Ids of CNN and RNN.",
    },
    "to" : {
        type: [Number],
        description: 
        "Array of Ids of child nodes. They are reference to the Neural Networks" +
        " considered as child of, or derived from, the current; e.g. For CNN you can wright" +
        " the Ids of RCNN and YOLO.",
    },
    "categories": {
        type: [String],
        description:
        "Families who this NN belongs to. This is a more free field, where" +
        " you can annotate about how was used or study fields. For example," +
        " for CNN you can wright: ['computer vision', 'filtering', 'classification']";
    },
};

const paperIdentity = {
    "title": "Learning Internal Representations by Error Propagation",
    "authors": ["Rumelhart", "Hinton", "Williams"],
    "ISO690": "RUMELHART, D. E.; HINTON, G. E.; WILLIAMS, R. J. Learning Internal Representations by Error Propagation.",
    "links": []
}