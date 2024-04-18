(() =>{
	// css 추가
	const mylink = document.createElement('link');
	mylink.rel = 'stylesheet';
	mylink.href = 'myModule.css';
	document.head.appendChild(mylink);

	// Vue
	const { createApp, ref } = Vue;
	
	createApp({
		setup(){
			const count = ref(0);
			const increaseCnt = () => {
				count.value++;
			};
	
			return { count, increaseCnt };
		}
	}).mount('#myVue');
})();