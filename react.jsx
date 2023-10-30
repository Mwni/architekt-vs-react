import React, { useState, useEffect } from 'react'
import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { generateRandomTree } from './challenge'

const ReactApp = () => {
	let [tree, setTree] = useState(generateRandomTree())

	useEffect(() => {
		window.reactTick = () => {
			flushSync(() => {
				setTree(generateRandomTree())
			})
		}
	})

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
				<span className="label">{branch.label}</span>
				<Tree tree={branch.children}/>
			</div>
		)}
	</>
)

let root = createRoot(document.querySelector('.react'))

root.render(<ReactApp/>)