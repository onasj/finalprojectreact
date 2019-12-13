import React from "react";

import UserInformation from "..//..//components/UserProfileComponent";

import Img from 'react-image'

export default function UserProfile({user}) {
	console.log("user", user);
	return (
		<div>
			<h1>UserProfile for UID {user.uid && user.uid}</h1>
		</div>
	)
}