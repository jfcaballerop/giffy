import { useEffect, useRef } from "react"

const useSEO = ({ description, title }) => {
	const prevTitle = useRef(document.title)
	const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))



	useEffect(() => {
		const previousTitle = prevTitle.current
		if (title) {
			document.title = `${title} | Giffy`
		}
		return () => document.title = previousTitle
	}, [title])

	useEffect(() => {
		const previousDesc = prevDescription.current
		const metaDesc = document.querySelector('meta[name="description"]')
		if (description) {
			metaDesc.setAttribute('content', description)
		}
		return () => metaDesc.setAttribute('content', previousDesc)
	}, [description])

}

export default useSEO
