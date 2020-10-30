import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
	const { firstname, lastname, user, _id } = props.brewery;
	return (
		<>
			<Link to={`/profile/${_id}`}>
				<div className="profile-card">
					<div className="image-wrapper"></div>
					<h3>Your Profile</h3>
					<p>
						{firstname}, {lastname}, {user}
					</p>
				</div>
			</Link>
			<Link to={`/profile/${_id}/edit`} style={{ color: "black" }}>
				Edit
			</Link>
		</>
	);
};

export default ProfileCard;
