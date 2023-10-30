import { mount } from '@architekt/html'
import { Component, Fragment, Headline, VStack, Text } from '@architekt/ui'
import { generateRandomTree } from './challenge.js'


const ArchitektApp = Component(({ ctx }) => {
	let tree = generateRandomTree()

	return () => {
		Headline({
			text: 'Architekt'
		})
		Tree({ tree })
	}
})

const Tree = ({ tree }) => {
	for(let branch of tree){
		VStack(() => {
			Text({ text: branch.label })
			Tree({ tree: branch.children })
		})
	}
}

mount(document.body.querySelector('.architekt'), ArchitektApp)