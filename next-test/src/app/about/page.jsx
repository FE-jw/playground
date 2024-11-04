import { StyleSheetManager } from 'styled-components'';
console.log(StyleSheetManager);

async function Page() {

	const data = await fetch('https://api.vercel.app/blog');
	const posts = await data.json();
	console.log(posts);

	return ( 
		<ul>
			{posts.map((post) => (
				<li key={post.id}>{post.title}</li>
			))}
		</ul>
	 );
}

export default Page;