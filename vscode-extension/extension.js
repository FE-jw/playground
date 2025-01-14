const vscode = require('vscode');

function activate(context){
	const myExtensionChannel = vscode.window.createOutputChannel('My Extension');
	const currentWorkspace = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;
	const currentFilePath = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.document.fileName : undefined;
	const fileName = currentFilePath ? currentFilePath.substring(currentFilePath.lastIndexOf('\\') + 1) : undefined;
	
	const disposable = vscode.commands.registerCommand('my-extension.helloWorld', async () => {
		const name = await vscode.window.showInputBox({
			placeHolder: 'Enter your name',
			prompt: 'Enter your name to display'
		});

		if(name){
			myExtensionChannel.appendLine(`currentWorkspace: ${currentWorkspace}`);
			myExtensionChannel.appendLine(`currentFilePath: ${currentFilePath}`);
			myExtensionChannel.appendLine(`fileName: ${fileName}`);
		}
	});
	
	myExtensionChannel.show();
	context.subscriptions.push(disposable);
}

function deactivate(){}

module.exports = {
	activate,
	deactivate
};