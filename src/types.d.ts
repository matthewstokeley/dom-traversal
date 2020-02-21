export interface Node {
	nodeType: Number
}

export interface Element {
	el: String
}

export interface Siblings {
	el: HTMLCollection,
	siblings: Array<Node>
}