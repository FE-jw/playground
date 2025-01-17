const targetElement = '[data-v-header]';

Vue.createApp({
	setup(){
		const msg = Vue.ref('SUCCESS');
		const handleClick = evt => {
			isVisible.value = !isVisible.value;
		};
		const items = Vue.ref([1, 2, 3, 4, 5, 6, 7]);
		const isVisible = Vue.ref(false);

		// 스타일 정의
		const styles = `
			${targetElement} {padding:20px;border:1px solid #ccc;background-color:#f0f0f0;}
			${targetElement} p	{color:#d33;}
			${targetElement} button	{margin-top:10px;padding:10px 20px;border:none;line-height:1.2;font-size:16px;color:#fff;background-color:#000;cursor:pointer;}
		`;
  
		const styleTag = document.createElement('style');
		styleTag.textContent = styles;
		document.head.appendChild(styleTag);

		return { handleClick, msg, items, isVisible };
	}
}).mount(targetElement);