var postMsg = ''

function postText(value){
	console.log('iFrame sender: ' + value) 
	parent.postMessage(value, "*")
}


const scriptsInEvents = {

	async Gameset_Event22_Act2(runtime, localVars)
	{
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

