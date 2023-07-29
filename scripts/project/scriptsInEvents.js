var postMsg = ''

function postText(value){
	console.log('iFrame sender: ' + value) 
	parent.postMessage(value, "*")
}


const scriptsInEvents = {

	async Gameset_Event1_Act2(runtime, localVars)
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

	async Gameset_Event11_Act7(runtime, localVars)
	{
		runtime.globalVars.webSocket.close();
	},

	async Gameset_Event14_Act4(runtime, localVars)
	{
		runtime.globalVars.webSocket.close();
	},

	async Gameset_Event15_Act3(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:25")
	},

	async Gameset_Event21_Act3(runtime, localVars)
	{
		runtime.globalVars.webSocket.send("s:500")
	},

	async Gameset_Event22_Act2(runtime, localVars)
	{
		
	},

	async Addset_Event27_Act1(runtime, localVars)
	{
		const queryParams = new URLSearchParams(window.location.search)
		const token = queryParams.get('token');
		const gameId = queryParams.get('gameId');
		
		try{
			const webSocket = new WebSocket('wss://arcade.stage.legacyarcade.com/ws', [token,gameId]);
			runtime.globalVars.webSocket = webSocket;
			webSocket.onopen = (event) =>{
				runtime.callFunction('startendless');
			};
		}catch(e){
			const textInstance = runtime.objects.ErrorText.getFirstInstance()
			textInstance.text = "ERROR CONNECTING"
			console.log("error connecting to server", e)
		}
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

