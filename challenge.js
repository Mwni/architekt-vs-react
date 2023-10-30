export function generateRandomTree(depth){
	let tree = []
	let length = Math.ceil(Math.random() * 5)

	for(let i=0; i<length; i++){
		let branchDepth = depth === undefined
			? Math.floor(Math.random() * 5)
			: depth - 1

		tree.push({
			label: Math.random()
				.toString(16)
				.slice(2, 8)
				.toUpperCase(),
			children: branchDepth > 0
				? generateRandomTree(branchDepth)
				: []
		})
	}

	return tree
}