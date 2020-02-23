declare namespace DOMTraversal {
	
	interface Node {
		nodeType: Number
	}

	interface Element {
		el: String
	}

	interface Siblings {
		el: HTMLCollection,
		siblings: Array<Node>
	}

}