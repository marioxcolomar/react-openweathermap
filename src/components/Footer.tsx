import React from 'react'

interface Props {
	timestamp: string;
}

const Footer: React.FC<Props> = ({ timestamp }) => (
	<div className="footer">
		<p><i>Last update: {timestamp}</i></p>
	</div>
)

export default Footer