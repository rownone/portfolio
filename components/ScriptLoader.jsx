
const ScriptLoader = ({html}) => {
    console.log('html',html)
	return (
		<>
			<div dangerouslySetInnerHTML={{__html: html}}/>
		</>
	)
}

export default ScriptLoader