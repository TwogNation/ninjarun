var postMsg = ''

function postText(value){
	console.log('iFrame sender: ' + value) 
	parent.postMessage(value, "*")
}


const scriptsInEvents = {

	async Gameset_Event1_Act1(runtime, localVars)
	{
		runtime.globalVars.webSocket.onMessage = (event) => {
			if (event.data.startsWith('s:')){
				const score_ = event.data.split(':')[1];
				console.log(score_);
				runtime.globalVars.score = score_;
				runtime.callFunction("updateScore")
			}
		}
		
	},

	async Gameset_Event10_Act7(runtime, localVars)
	{
		runtime.globalVars.webSocket.close();
	},

	async Gameset_Event10_Act8(runtime, localVars)
	{
		window.parent.postMessage("WebSocketClosed", "*");
	},

	async Gameset_Event13_Act4(runtime, localVars)
	{
		runtime.globalVars.webSocket.close();
	},

	async Gameset_Event13_Act5(runtime, localVars)
	{
		window.parent.postMessage("WebSocketClosed", "*");
	},

	async Gameset_Event14_Act3(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:25")
	},

	async Gameset_Event20_Act3(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:500")
	},

	async Gameset_Event21_Act2(runtime, localVars)
	{
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

