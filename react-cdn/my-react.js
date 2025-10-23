const {useEffect, useState} = React;


const App = () => {
	const [cnt, setCnt] = useState(Number(document.querySelector('.wrap').getAttribute('data-cnt')));
	useEffect(() => {
		console.log('useEffect >> App mounted');
	}, []);

	useEffect(() => {
		const wrap = document.querySelector('.wrap');
		const observer = new MutationObserver((mutationsList) => {
			for (const mutation of mutationsList) {
				if (mutation.type === 'attributes') {
					console.log('.wrap 속성 변경 감지:', mutation.attributeName);
					console.log(wrap.getAttribute(mutation.attributeName));
					setCnt(wrap.getAttribute(mutation.attributeName))
				}
			}
		});
		observer.observe(wrap, { attributes: true });

		return () => observer.disconnect();
	}, []);

	return	(
		<UISection>
			{cnt}
			<h1>Lorem, ipsum dolor.</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
			<div><UIBtn className="my-class" onClick={() => console.log('버튼 1')}>버튼 1</UIBtn></div>
			<div><UIBtn onClick={() => console.log('버튼 2')}>버튼 2</UIBtn></div>
			<div><UIBtn onClick={() => setCnt(cnt - 1)}>cnt down</UIBtn></div>
			<div><UIBtn onClick={() => setCnt(cnt + 1)}>cnt up</UIBtn></div>
			<div><UIImg src="https://placehold.co/50/000/fff" /></div>
		</UISection>
	);
};

const UIBtn = ({children, className, ...rest}) => {
	return	(
		<button type="button" className={`${className ? `${className} ` : ''}UIBtn`} {...rest}>{children}</button>
	);
};

const UISection = ({children}) =>{
	return	(
		<div className="UISection">
			{children}
		</div>
	)
};

const UIImg = ({src, alt = ''}) => {
	return	(
		<img className="UIImg" src={src} alt={alt} />
	)
};

const app = ReactDOM.createRoot(document.querySelector('.wrap'));
app.render(<App />);

// const btn = ReactDOM.createRoot(document.getElementById('btn'));
// btn.render(<Btn />);