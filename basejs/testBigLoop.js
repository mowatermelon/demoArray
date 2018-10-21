const startGroup = (msg) => {
	console.group(`group ${msg}`);
}
const endGroup = (msg) => {
	console.groupEnd(`group ${msg}`);
}
const startTime = (msg) => {
	console.time(`time ${msg}`);
}
const endTime = (msg) => {
	console.timeEnd(`time ${msg}`);
}
const log = (msg) => {
	console.log(`log ${msg}`);
}

const logLn = (msg) => {
	console.log(`\n ${msg}`);
}

const testLoop = (isError, outerLoop, innerLoop) => {
	const defaultOuterLoop = 1000000;
	const defaultInnerLoop = 1000;
	if (!outerLoop) {
		outerLoop = defaultOuterLoop;
	}
	if (!innerLoop) {
		innerLoop = defaultInnerLoop;
	}
	if (arguments.length === 0) {
		isError = false;
	}
	log(`outerLoop:${outerLoop},innerLoop:${innerLoop}`);
	let res = 0;
	let outerLoopArr = Array(outerLoop);
	let innerLoopArr = Array(innerLoop);
	if (isError) {
		outerLoopArr = outerLoopArr.fill(outerLoop);
		innerLoopArr = innerLoopArr.fill(innerLoop);
	}
	if (Boolean(outerLoop) && Boolean(innerLoop)) {
		startGroup(`outerLoop:${outerLoop},innerLoop:${innerLoop}`);
		outerLoopArr.forEach((outer) => {
			res += outer;
			innerLoopArr.forEach((inner) => {
				res += inner;
			})
		});
		endGroup(`outerLoop:${outerLoop},innerLoop:${innerLoop}`);

	}
	return res;
}

const testLoops = (isError) =>{
	logLn(`test ${isError} loop`);
	startTime(`test big outerLoop`);
	log(testLoop(isError));
	endTime(`test big outerLoop`);
	
	startTime(`test small outerLoop`);
	log(testLoop(isError,1000, 1000000));
	endTime(`test small outerLoop`);
}

testLoops(true);

testLoops();
