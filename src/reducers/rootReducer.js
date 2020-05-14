const initState = {
	posts: [
		{
			id: '1',
			title: 'Senator Rand Paul',
			body:
				'The Senate must immediately hold hearings on this! Clapper, Comey, Brennan and even Biden owe it to the American people. They should testify under oath. What did the former president know?'
		},
		{
			id: '2',
			title: 'Jonathan Turley',
			body:
				'Judge Sullivan has now appointed a retired judge to look into “whether the Court should issue an Order to Show Cause why Mr. Flynn should not be held in criminal contempt for perjury.” Thus, the court is not only considering denying an uncontested motion for dismissal but...'
		},
		{
			id: '3',
			title: 'Scott Adams',
			body:
				'How many Americans have died from #coronavirus who were under 60 and also had a "healthy" body weight? I have a strong feeling that political correctness is preventing us from understanding our individual risks, which could keep the economy closed and destroy civilization.'
		}
	]
};

const rootReducer = (state = initState, action) => {
	if (action.type === 'DELETE_POST') {
		let newPosts = state.posts.filter((post) => {
			return action.id !== post.id;
		});
		return {
			...state,
			posts: newPosts
		};
	}
	return state;
};

export default rootReducer;
