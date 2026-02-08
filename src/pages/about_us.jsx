import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { STATIC_INFO } from '../../Website/STATIC_INFO'

export const About_Us = () => {
	return (
		<>
		<div className="container">
			<div className="text_box">
				<h1>About {STATIC_INFO.APP_NAME}</h1>
				<p>
					{STATIC_INFO.APP_NAME} is a community-first organization that mobilizes people,
					supplies, and local partners within hours of a crisis. We focus on fast, practical
					help for families affected by storms, displacement, or unexpected housing and
					food insecurity.
				</p>
				<p>
					Our teams are trained to assess urgent needs, coordinate volunteers, and deliver
					support with dignity. We keep communication clear and resources organized so
					neighbors can recover quickly and safely.
				</p>
			</div>
			<div className="text_box">
				<h2>What We Do</h2>
				<div className="row">
					<ul>
						<li>Emergency food and water delivery within 24 hours.</li>
						<li>Temporary housing placement and tenant advocacy.</li>
						<li>Rapid intake forms for faster, verified assistance.</li>
						<li>Local partner coordination for long-term recovery.</li>
					</ul>
				</div>
			</div>
			<div className="text_box">
				<h2>How We Work</h2>
				<p>
					We operate a single intake system and a verified needs process to reduce delays.
					Each request is triaged, assigned to a coordinator, and matched with available
					resources. This lets us scale during major events while still supporting individual
					households.
				</p>
				<div className="button_row">
					<Link to="/food">Request Food Assistance</Link>
					<Link to="/tenant">Tenant Housing Support</Link>
				</div>
			</div>
		</div>
		</>
	)
}
