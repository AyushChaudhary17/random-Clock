const time=document.getElementById("time");
		const [s,l]=["75%","75%"];
		const updateTime=()=>{
			const currentTime=new Date().toLocaleTimeString();
			const Toprandom=Math.random()*90 + "%";
			const r=Math.random()*255;
			const h=Math.random()*365;
			
			const leftRandom=Math.random()*90 + "%";
			time.setAttribute("style",`color : hsl(${h},${s},${l}); top : ${Toprandom}; left : ${leftRandom}`);
			// time.setAttribute("style","left : " + leftRandom);
			// time.setAttribute("style","top : " + random);
			
			time.textContent=currentTime;
			
		}
		updateTime();
		setInterval(updateTime,1000);