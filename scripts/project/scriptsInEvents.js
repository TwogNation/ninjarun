var postMsg = ''

function postText(value){
	console.log('iFrame sender: ' + value) 
	parent.postMessage(value, "*")
}


const scriptsInEvents = {

	async Gameset_Event11_Act7(runtime, localVars)
	{
		postText(runtime.globalVars.postScore)
	},

	async Gameset_Event14_Act4(runtime, localVars)
	{
		postText(runtime.globalVars.postScore)
	},

	async Gameset_Event22_Act2(runtime, localVars)
	{
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

