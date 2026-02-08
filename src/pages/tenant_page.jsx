import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { STATIC_INFO } from '../../Website/STATIC_INFO'

export const Tenant_Page = () => {
	return (
		<>
		<div className="container">
			<div className="text_box">
				<h1>Tenant Housing Support</h1>
				<p>
					{STATIC_INFO.APP_NAME} helps tenants navigate urgent housing challenges after
					emergencies, sudden displacement, or unsafe living conditions. Our goal is to
					stabilize housing quickly and connect you with trusted local resources.
				</p>
			</div>
			<div className="text_box">
				<h2>Services We Provide</h2>
				<ul>
					<li>Temporary lodging placements and hotel vouchers.</li>
					<li>Landlord communication support and documentation help.</li>
					<li>Emergency utility assistance and short-term grants.</li>
					<li>Referrals to legal aid and tenant rights organizations.</li>
				</ul>
			</div>
			<div className="text_box">
				<h2>What We Need From You</h2>
				<p>
					Please gather your most recent lease or rental agreement, a photo ID, and any
					notices related to the incident. If you are unsafe right now, prioritize getting to
					a safe location and call local emergency services.
				</p>
				<div className="button_row">
					<Link to="/food">Request Food Assistance</Link>
					<Link to="/about">Learn About Our Response Team</Link>
				</div>
			</div>
		</div>
		</>
	)
}
