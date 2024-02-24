import {promises as fs} from "fs";
const useFetchTexts = async ()=>{
	let baseURL = process?.env?.APP_URL
	if(baseURL == undefined ) baseURL = process.cwd()
	const file = await fs.readFile(baseURL + '/src/data/texts.json', 'utf8');
	return JSON.parse(file);
}
export {
	useFetchTexts
}