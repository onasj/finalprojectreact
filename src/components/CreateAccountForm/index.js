import React from "react";

export default function CreateAccountForm( {submitFunction} ) {
	return <div>
		<form onSubmit={e => submitFunction(e)}>
			<label for="Create Email">Email</label>
			<input type="email" name="createEmail" placeholder="email"/>
			<label for="Create Password"> Password</label>
			<input type="password" name="createPassword" placeholder="password"/>
			<button>Sign up</button>
		</form>
	</div>
}