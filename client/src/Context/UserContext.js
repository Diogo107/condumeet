import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [user, setUser] = useState({
		name: 'Diogo Santos',
		avatar:
			'https://i.pinimg.com/originals/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg',
	});
	return (
		<UserContext.Provider value={[user, setUser]}>
			{props.children}
		</UserContext.Provider>
	);
};
