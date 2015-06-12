const hello = (who) => {
	console.log(`hello ${who}`)
}
const chars = 'abcdefghijklmnopqrstuvwxyz';
const getRandomChar = () => chars[~~(Math.random() * chars.length)];
const getRandomName = () => [...Array(10)].map(_ => getRandomChar()).join('');

const people = [...Array(10)].map(_ => getRandomName());

const notCovered = () => { console.log('never!'); };

export default people;
