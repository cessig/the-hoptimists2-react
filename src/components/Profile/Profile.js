import React from "react";
import ProfileCard from "./ProfileCard";

import "./Profile.css";

const Profile = (props) => {
	function generateProfileCards(profile) {
		return profile.map((profile) => {
			return <ProfileCard key={profile._id} profile={profile} />;
		});
	}

	return (
		<div className="brewery-container">{generateProfileCards(props.data)}</div>
	);
};

export default Profile;
