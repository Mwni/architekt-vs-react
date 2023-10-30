import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { generateRandomTree } from './challenge'

const ReactApp = () => {
	let [tree, setTree] = useState(generateRandomTree())

    return (
        <>
			<h1>React</h1>
			<Tree tree={tree}/>
		</>
    )
}

const Tree = ({ tree }) => (
	<>
		{tree.map(
			branch => <div>
				<span class="label">{branch.label}</span>
				<Tree tree={branch.children}/>
			</div>
		)}
	</>
)

ReactDom.render(<ReactApp/>, document.querySelector('.react'))