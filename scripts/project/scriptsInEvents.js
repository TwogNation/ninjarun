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
		
	},

	async Addset_Event27_Act1(runtime, localVars)
	{
		const queryParams = new URLSearchParams(window.location.search)
		const token = queryParams.get('token');
		const gameId = queryParams.get('gameId');
		console.log("clicked")
					const textInstance = runtime.objects.ErrorText.getFirstInstance()
					textInstance.text = "PLEASE WAIT..."
					const button = runtime.objects.BtnPlay.getFirstInstance();
					button.destroy(); 
		// Add a variable to track if the WebSocket is already connected or in the process of connecting
		let isWebSocketConnectingOrConnected = false; 
					
		try {
		    // Check if the WebSocket is already connected or in the process of connecting
		    if (!isWebSocketConnectingOrConnected) {
		        const webSocket = new WebSocket('wss://arcade.stage.legacyarcade.com/ws', [token, gameId]);
		        runtime.globalVars.webSocket = webSocket;
		
		        webSocket.onopen = (event) => {
		            isWebSocketConnectingOrConnected = true;  // Set the flag to true when connection is established
		            runtime.callFunction('startendless');
		        };
		
		        webSocket.onclose = (event) => {
		            isWebSocketConnectingOrConnected = false; // Reset the flag when the connection is closed
		        };
		
		        webSocket.onerror = (event) => {
		            isWebSocketConnectingOrConnected = false; // Reset the flag on error
		        };
		
		        runtime.globalVars.playable = 1;
		    }
		} catch (e) {
		    const textInstance = runtime.objects.ErrorText.getFirstInstance();
		    textInstance.text = "ERROR CONNECTING";
		    console.log("error connecting to server", e);
		}
		
		
		
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

